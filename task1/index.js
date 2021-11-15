const testMarks = [{
    name: 'Vasya',
    avgMark: 3.75
}, {
    name: 'Lena',
    avgMark: 4.89
}];

// within in one loop little optimised beside
// checking for if statement inside loop

function getStatistics(marks) {
    let avgMarkResult = 0;
    let highestMark = marks[0].avgMark;
    let lowestMark = marks[0].avgMark;
    let highestMarkOwner;
    let lowestMarkOwner;

    marks.forEach(({ avgMark, name }) => {
        avgMarkResult += avgMark;
        if (highestMark < avgMark) {
            highestMark = avgMark;
            highestMarkOwner = name;
        }
        if (lowestMark > avgMark) {
            lowestMark = avgMark;
            lowestMarkOwner = name;
        }
    });

    avgMarkResult = avgMarkResult / marks.length;
    return { avgMark: avgMarkResult, highestMark: highestMarkOwner, lowestMark: lowestMarkOwner };
}

// writen with array prototype methods not optimised
// but just to show another solution

function getStatistics2(marks) {
    const avgMark = marks.reduce((mark, { avgMark }) => mark += avgMark, 0) / marks.length;
    const highestMarkStudent = [...marks].sort(({ avgMark: avgMarkA }, { avgMark: avgMarkB }) => avgMarkA - avgMarkB).pop().name;
    const lowestMarkStudent = [...marks].sort(({ avgMark: avgMarkA }, { avgMark: avgMarkB }) => avgMarkB - avgMarkA).pop().name;
    return { avgMark, highestMark: highestMarkStudent, lowestMark: lowestMarkStudent };
}
console.log(getStatistics(testMarks));
console.log(getStatistics2(testMarks));