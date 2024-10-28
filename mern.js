const { appendFile } = require("fs");

function multiply(a, b=2){
    return a*b;
}
console.log(multiply(3))

function sum(a,b){
    return a+b;
}
console.log(sum(10));

const arr = [1,2,3];
const mapped = arr.map(num => num *2);
console.log(mapped);

let x = 10;
let y = 20;
console.log(x > y ? 'x is greater than y': 'y is greater than x');

function greet(name = 'stranger'){
    return 'Hello, ${name}';
}
console.log(greet());

const numbers = [1,2,3,4];
const result = numbers.reduce((sum,numbers) => sum + numbers, 0);
console.log(result);

const a = [1,2,3];
const b = [...a, 4, 5];
console.log(b);

let count = 0;
while (count < 5 ){
    count++
}
console.log(count)

const fruit = 'apple';
switch (fruit){
    case 'banana':
        console.log('Banana');
        break;
    case 'apple':
        console.log('Apple');
        break;
    default:
        console.log('unknown fruit');
}

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// app.listen(3000);
// console.log('Server is running on port 3000');

// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello Node.js');
// }).listen(8080);

// console.log('Server is running on port 8080');

// app.use((req, res, next) => {
//     console.log('Middleware executed');
//     next();
// });

// const os = require('os');
// console.log(os.platform());

// db.users.find({age: {$gte:21}});

// db.collection.updateOne({name : 'John'},{$set: {age: 30}});

// const User = mongoose.model('User', new mongoose.Schema({name: String, age: Number}));
// User.findOne({name : 'John'}, function (err, user){
//     console.log(user);
// });

let j = 5, 
    l = 10;
console.log(j === l || l === 10 && j === 5);
