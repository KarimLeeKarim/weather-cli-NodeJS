import axios from 'axios';
import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

export const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Please indicate API key, in terminal with -t [API_KEY]')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    return data;

    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city)
    // url.searchParams.append('appid', token)
    // url.searchParams.append('lang', 'ru')
    // url.searchParams.append('units', 'metric')

    // https.get(url, (response) => {
    //     let result = ''
    //     // let res = [];

    //     response.on('data', (chunk) => {
    //         result+=chunk
    //         // res.push(chunk);
    //     });

    //     response.on('end', () => {
    //         console.log(result);
    //         // console.log(result);
    //         // const users = JSON.parse(Buffer.concat(res).toString());
    //         // console.log('users', users);

    //     });
    // })
}