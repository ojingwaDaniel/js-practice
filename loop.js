// for (let index = 12; index >=1; index--) {
//     console.log(`${index}x ${index} = ${index * index}`)
// }
// let listOfNumbers = [5,5,5,5,5,5,5]
// let answer = 0
// for(let i = 0;i < listOfNumbers.length; i++ ){
//     answer += listOfNumbers[i]
// }
// console.log(answer)
// // A CODE TO CALCULATE THE AVEARGE OF THE TOTAL SCORE OF STUDENTS OF A COURSE
// let studentList = [
//     {
//         name : 'obi okafor',
//         score : 56
//     },
//     {
//         name : 'benjamin ariwodo',
//         score : 70
//     },
//     {
//         name : 'richard Eze',
//         score : 75
//     },
//     {
//         name : 'otete prince ',
//         score : 60
//     },
//     {
//         name : 'Ojingwa Daniel',
//         score : 80
//     }
// ]
// let avgScore = 0
// for (let i = 0; i < studentList.length; i++) {
//     let student = studentList[i]
//     avgScore += student.score
// }
// console.log(avgScore/studentList.length)
// A CODE TO CALCULATE A TOTAL SCORE OF NUMBERS IN A GAMEBOARD
let gameBoard = [
    [12,34,25,7,45],
    [15,23,37,5,37],
    [13,30,21,4,48],
    [10,13,27,22,50]
]
let totalScore = 0
for(let i =0; i < gameBoard.length; i++){
    let  rows = gameBoard[i]
    for (let j = 0; j < rows.length; j++) {
        totalScore += rows[j]
        
    }
}
console.log(totalScore)
