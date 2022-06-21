import chalk from 'chalk';

export const printError = (error) => {
    console.log(`${chalk.bgRed('Error')} ${error}`);
}

export const printSuccess = (message) => {
    console.log(`${chalk.bgGreen('Success')} ${message}`);
}

export const printHelp = () => {
    console.log(`${chalk.bgCyan('Help')}
Without parametrs
-s [CITY] for set up city
-h output for helping 
-t [API_KEY] for save Token
    `);
}