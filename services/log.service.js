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

export const printSuccessInfo = (data) => {
    const result = Object.entries(data.wind)
    console.log(`${chalk.bgMagenta('ForeCast for Today')}
name of city : ${data?.name}
language : ${data?.sys?.country}
description : ${data?.weather[0].description}
temperature : ${data?.main?.temp}
sea level : ${data?.main?.sea_level}
humidity : ${data?.main?.humidity}
    `);
    for (const [key, value] of result) {
        console.log(`${key} : ${value}`);
    }
}