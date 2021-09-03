#!/usr/bin/env node

const yargs = require('yargs/yargs')
const Current = require('./src/current');
const Sub = require('./src/sub');
const Add = require('./src/add');

const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .command('current', 'Show current date', function (yargs) {
        return yargs
            .option('year', {
                describe: 'show current year'
            })
            .option('month', {
                describe: 'show current month'
            })
            .option('date', {
                describe: 'show current day'
            })
    })
    .command('add', 'add to the date', function (yargs) {
        return yargs
            .option('year', {
                describe: 'add a year to the date'
            })
            .option('month', {
                describe: 'add a month to the date'
            })
            .option('date', {
                describe: 'add a day to the date'
            })
    })
    .command('sub', 'subtract from the date', function (yargs) {
        return yargs
            .option('year', {
                describe: 'subtract from the date year'
            })
            .option('mont', {
                describe: 'subtract from the date month'
            })
            .option('date', {
                describe: 'subtract from the date day'
            })
    })
    .alias('y', 'year')
    .alias('m', 'month')
    .alias('d', 'date')
    .argv

const [command] = argv._;
let date = new Date();
let action;
let argument;
const keys = Object.keys(argv);

switch (true) {
    case keys.includes('year'):
        action = 'year';
        argument = argv.y;
        break;
    case keys.includes('month'):
        action = 'month';
        argument = argv.m;
        break;
    case keys.includes('date'):
        action = 'day';
        argument = argv.d;
        break;
    default:
        action = 'current';
        argument = true;
        break;
}

switch (command) {
    case 'current':
        const current = new Current(date);
        if (action in current && typeof argument === 'boolean') {
            console.log(current[action]());
        }
        break;
    case 'add':
        const add = new Add(date);
        if (action in add && typeof argument === 'number') {
            console.log(add[action](argument));
        }
        break;
    case 'sub':
        const sub = new Sub(date);
        if (action in sub && typeof argument === 'number') {
            console.log(sub[action](argument));
        }
        break;
}
