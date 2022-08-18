for (let index = 12; index >=1; index--) {
    console.log(`${index}x ${index} = ${index * index}`)
}
let listOfNumbers = [5,5,5,5,5,5,5]
let answer = 0
for(let i = 0;i < listOfNumbers.length; i++ ){
    answer += listOfNumbers[i]
}
console.log(answer)
let studentList = [
    {
        name : 'obi okafor',
        score : 56
    },
    {
        name : 'benjamin ariwodo',
        score : 70
    },
    {
        name : 'richard Eze',
        score : 75
    },
    {
        name : 'otete prince ',
        score : 60
    },
    {
        name : 'Ojingwa Daniel',
        score : 80
    }
]
let avgScore = 0
for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i]
    avgScore += student.score
}
console.log(avgScore/studentList.length)
