// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    const message = [];
        for (let i=0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown(startingPoint) {
    while (startingPoint >=0)
    {console.log(startingPoint--)};
}
// countDown(38)