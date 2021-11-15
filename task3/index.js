function getCountOfHolesInNumber(number) {
    const holesInNumber = new Map([
        [0, 1],
        [4, 1],
        [6, 1],
        [8, 2],
        [9, 1]
    ]);
    const numberAsDigitsArray = [...String(number)];
    const countOfHolesInNumber = numberAsDigitsArray.reduce((acc, item) => {
        const holeCount = holesInNumber.get(Number(item)) || 0;
        return acc += holeCount;
    }, 0);
    return countOfHolesInNumber;
}

function compator(a, b) {
    return getCountOfHolesInNumber(a) - getCountOfHolesInNumber(b);
}

function sortNumberArrayByHole(numberArray) {
    return [...numberArray].sort(compator);
}

console.log(sortNumberArrayByHole([1, 2, 3, 4, 44, 55, 66, 9]));