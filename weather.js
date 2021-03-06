#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess, printSuccessInfo } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Without token')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token saved')
    } catch (e) {
        printError(e?.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Without token')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City saved')
    } catch (e) {
        printError(e?.message)
    }
}

const getForeCast = async () => { 
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    try {
        const weather = await getWeather(city);
        printSuccessInfo(weather)
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('Please indicated correct city')
        }
        else if (error?.response?.status == 401) {
            printError('Please indicated correct token')
        } else {
            printError(error.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args?.h) {
        printHelp()
    }
    if (args?.s) {
        return saveCity(args?.s)
    }
    if (args?.t) {
        return saveToken(args?.t)
    }
    return getForeCast();
}

initCLI()