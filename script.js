let print = alert('This should work ')
// a code  that rates a app from 5 star
let userRating = prompt('how do you rate this application  from a scale of 1-10')
userRating = parseInt(userRating)
if (userRating <3) {
    console.log('you are rated the application poor , please leave a comment on how we can improve')
}
if (userRating == 3) {
    console.log('you are rated the application average , thank you for your response ')
}
if (userRating > 3) {
    console.log('you are rated the application very  good  ,  we are happy you are satisfied thank you for your response ')
}
