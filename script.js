// a code  that rates a app from 5 star
let userRating = prompt('how do you rate this application  from a scale of 1-10')
userRating = parseInt(userRating)
if (userRating <3) {
    console.log('you are rated the application poor , please leave a comment on how we can improve')
}
else if (userRating == 3) {
    console.log('you are rated the application average , thank you for your response ')
}
else if (userRating > 3) {
    console.log('you are rated the application very  good  ,  we are happy you are satisfied thank you for your response ')
}
else{
    console.log('invalid rating please input a digit from 1-5')
}
// A CODE FOR A MOBILE GAME
let userScore = 10000;
let highScore = 6000;
if (userScore > highScore) {
    console.log(`Congratulation your current score beat your highest score of ${highScore}`);
    highScore = userScore
} else {

    console.log(`Good try but your current score did not beat your high score of ${highScore}`);
    
}
//A code for a password on an account
let password = 'boy';
if (password.length >= 8) {
    if (password.indexOf(' ')== -1) {
      console.log('VALID PASSWORD ')

    } else {
        console.log('your input password is long enough but spaces are not allowed');

    }
    
} else {
    console.log('your passsword must be equal to or more than eight character');
} 
//CODE FOR TRUTHY VALUE
let user = 'Daniel';
if (user) {
    console.log('YOU ARE ONLINE');
    
} else {
    console.log('USER IS OFFLINE FOR NOW')
}
// CODE TO CHOOSE A QUALIFIED VOTER
let votersAge = prompt('Enter your age')
votersAge = parseInt(votersAge)
let pvc = prompt('do you have a current PVC: YES OR NO')
pvc = pvc.toUpperCase()
if (votersAge >= 18 && pvc == 'YES') {A
    console.log('Congratulation you are qualified to vote ');
} 
else {
    console.log('sorry you dont meet the requirement check out the requirement'); 
}
//CODE TO DECIDE WHO PAYS HOSPITAL BILLS IN A HOSPITAL
let patientAge = 16
if (patientAge <=17 || patientAge >=65) {
    console.log('YOU DONT HAVE TO PAY ANY BILLS HAVE A SAFE JOURNEY HOME , BE SAFE');
}else{
    console.log('PLEASE YOU NEED TO PAY YOUR BILLS : CASH OR CREDIT CARD')
}
// SWITCH STATEMENT
// A CODE THAT PRINTS OUT PLAYERS NAME BY JUST PUTTING IN THEIR JERSERY NUMBER
let jerseyNumber = 9;
switch(jerseyNumber){
    case 1:console.log('Ter Stergen')
    break
    case 23:console.log('Kounde')
    break

    case 13:console.log('Jordi Alba')
    break

    case 15:console.log('Christensene')
    break

    case 4:console.log('Araujo')
    break

    case 21:console.log('De Jong')
    break

    case 8:console.log('Pedri')
    break

    case 19:console.log('Kessie')
    break

    case 7:console.log('Dembele')
    break

    case 10:console.log('Ansu Fati')
    break

    case 9:console.log('Lewandoski')

    
}
