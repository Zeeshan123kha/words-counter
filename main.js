"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// declare a constant `answer` and assign it to the result of inquirer.prompt function
const answer = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word!"
    }
]);
const words = answer.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the words count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
