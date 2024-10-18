const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);


let hasfakeID = prompt("It's a house party and we need to get some alcholic drinks as under age teens. Do we have fake IDs?");

console.log(`The answer is ${hasfakeID}`);
if (hasfakeID.toLowerCase() === 'yes') {
   let goToStore = prompt('Can we go to the Mega Package Store off of Commit Ave?');}
// if (goToStore.toLowerCase() === "yes")

// Fake ID 
let buyBeer = prompt("Hey Mr.Nelson can we buy this case of beer? yes"); 

if (buyBeer.toLowerCase() === "yes") {
    alert("Hooray! Go back to the party")

} else {
    prompt('Can your older cousin Melissa buy for us?');
}
// It's a house party and Lisa and Megan need to get some alcholic drinks as under age teens. Do we have fake IDs? 
// yes. Can we go to the Mega Package Store off of Commit Ave? Yes
// Hey Mr. Nelson can we buy this case of beer? yes 
// Horray go back to the party
// On the way to the party Lisa and Megan get pulled over by neighborhood police. Lisa is driving and says to Megan," can you throw a jacket over it" yes or no

// // It's a house party and we need to get some alcholic drinks as under age teens. Do we have fake IDs? 
// no. Can you your older cousin Melissa buy for us? yes
// Hey Mr. Nelson. Hi Melissa how's college? Great. Can I buy this case of beer? yes 
// Horray go back to the party
// on the way to the party 

