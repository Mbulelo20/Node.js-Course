const chalk = require('chalk');
const yargs = require('yargs')
const run = console.log;

const getNotes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'       
        },
        body: {
            description: 'Note title',
            demandOption: true,
            type: 'string'       
        }
    },
    handler: function (argv) {
        console.log(argv.title)
        console.log('testing')
    }
})


