### What is this?

### random-question

This is package that gives a random interesting question.

### Sample Question

- " When was the last time you were hopelessly lost?",
- " What songs do you feel compelled to sing along with when you hear them, even if you don’t totally know all the words?",
- " What product do you wish a company would make a “smart” version of?",
- " What two films would you like to combine into one?",
- " What’s are some of your Pavlovian responses?",

## Installation

```sh
$ npm install random-question
```

## Usage

## Import `random-question`

```sh
const randomQuestion = require("random-question");
```

## OR

```sh
import randomQuestion from "random-question";
```

## Then

```
console.log(randomQuestion.randomQuestion());

```

The above will output the following:

```
What’s the weirdest conversation you’ve eavesdropped on?
```

## OR

```
console.log(randomQuestion.randomQuestion(5))

```

The above will output an array of questions for example:

```
// Depending on the number of question that you passed to the function randomQuestion

[
  ' What’s something that I don’t know?',
  ' What’s the most rage inducing game you’ve ever played?',
  ' What food is delicious but a pain to eat?',
  ' What’s fine in small numbers but terrifying in large numbers?',
  ' What was the most amazing physical feat you’ve managed to pull off?'
]

```
