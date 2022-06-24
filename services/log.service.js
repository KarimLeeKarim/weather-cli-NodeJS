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
    console.log(`${chalk.bgMagenta('ForeCast for Today')}
🌃 : ${data.name}
👅 : ${data.sys.country}
Description: ${data?.weather[0].description}
===Main Info===
🌡  : ${data.main.temp}
🌊 : ${data.main.sea_level}
🌧  : ${data.main.humidity}
===Wind Info==='
💨 : ${data?.wind?.speed}
🚨 : ${data?.wind?.deg}
☄️  : ${data?.wind?.gust}
`);
}