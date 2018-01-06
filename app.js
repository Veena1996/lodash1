// console.log('starting log');
// const fs = require('fs'); //variable declaration
// const os = require('os');
// var user = os.userInfo();
//
// fs.appendFileSync('nodes.txt','hello world');
// //console.log('username' + ${user.username});
// //console.log('Starting app.');
//
//
//
// fs.appendFile('greetings.txt', `Hello ${user.username}!`);
const notes=require('./notes.js');
//console.log (`your age is ${notes.age} `);

//var res = notes.addNote();
//console.log(res);

console.log('Result:', notes.add(9, -2));
const _ = require('lodash');
console.log(_.isString('asd')); //Returns true if value is a string, else false.
console.log(_.isString(1));

// var array = ['hello','hello','hi'];
// _.uniq(['hello','hello','hi']);
var filteredArray = _.uniq(['abc','one','abc',1,4,6,6,6]);
console.log(filteredArray);


var zip = _.zip(['a', 'b','c'], [1, 2,3], [true, false,false]); //Returns the new array of grouped elements.
console.log(zip);

var zip1 = _.unzip(zip); //Returns the new array of regrouped elements.
console.log(zip1);


var c = _.ceil(4.001); // Returns the rounded up number
console.log(c);


var d = _.floor(7.008); //Returns the rounded down number.
console.log(d);

var e = _.capitalize('FRED'); //Converts the first character of string to upper case and the remaining to lower case.
console.log(e);
