writePermutationInFile(5);

function writePermutationInFile(number) {
    const fs = require('fs');
    const permutations = permutator(generateArray(number)).map(el => el.join(''));
    const result = [...new Set(permutations)].join('\n');
    let countOfString;
    fs.writeFile('./result.txt', result, (err) => { if (err) throw err })
    fs.readFile('./result.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
            return
        }
        countOfString = data.length;
    })

    function permutator(array) {
        const result = [];

        function p(array, temp) {
            let i, x;
            if (!array.length) {
                result.push(temp);
            }
            for (i = 0; i < array.length; i++) {
                x = array.splice(i, 1)[0];
                p(array, temp.concat(x));
                array.splice(i, 0, x);
            }
        }
        p(array, []);
        return result;
    }

    function generateArray(number) {
        return [...Array.from({ length: number }, _ => 0),
            ...Array.from({ length: number }, (_, index) => index + 1)
        ];
    }
    return countOfString;
}