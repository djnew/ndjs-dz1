#!/usr/bin/env node

const readline = require('readline');
const {EventEmitter} = require('events')

const emitter = new EventEmitter();
let randomNumber;
let gameState = true;

emitter.on('generateNumber', () => {
    randomNumber = Math.round(Math.random() * (100));
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
emitter.emit('generateNumber');
console.log('Загадано число в диапазоне от 0 до 100');
rl.prompt();
rl
    .on('line', (line) => {
        if (gameState) {
            const parseLine = parseInt(line.trim());
            if (isNaN(parseLine)) {
                console.log('Вводите только числа! ');
            } else {
                if (parseLine > randomNumber) {
                    console.log('Меньше');
                } else if (parseLine < randomNumber) {
                    console.log('Больше');
                } else {
                    console.log(`Отгадано число ${randomNumber}`);
                    console.log(`Хочешь еще раз сыграть? (Да/Нет)`);
                    gameState = false;
                }
            }
        } else {
            if (line.toLocaleLowerCase() === 'да') {
                gameState = true;
                emitter.emit('generateNumber');
                console.log('Загадано число в диапазоне от 0 до 100');
            } else if (line.toLocaleLowerCase() === 'нет') {
                console.log('Ну что ж, в следующий раз!');
                process.exit(0);
            } else {
                console.log('Введите: да/нет');
            }
        }

        rl.prompt();
    })
    .on('close', () => {
        console.log('Ну что ж, в следующий раз!');
        process.exit(0);
    });
