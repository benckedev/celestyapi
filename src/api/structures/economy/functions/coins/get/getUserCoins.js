import { db } from "../../../../../database/economy/EconomyData.js"

/**
* função para receber quantia de coins do usuário 
* @param {any} id - id do usuário
**/
async function getUserCoins(id) {
    return (await db.data.users.find(search => search.id === id)).coins
}

/**
* função para verificar quantia de coins do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de coins
**/
async function hasUserCoins(id, amount) {
    return ((await getUserCoins(id)) >= amount)
}

/**
* função para receber quantia de coins do banco do usuário 
* @param {any} id - id do usuário
**/
async function getUserBank(id) {
    return (await db.data.users.find(search => search.id === id)).bank
}

/**
* função para verificar quantia de coins no banco do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de coins
**/
async function hasUserBank(id, amount) {
    return ((await getUserBank(id)) >= amount)
}

/**
* função para receber quantia de coins do banco e da mão do usuário 
* @param {any} id - id do usuário
**/
async function getUserTotal(id) {
    return ((await getUserCoins(id)) + (await getUserBank(id)))
}

/**
* função para verificar quantia de coins no banco e na carteira do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de coins
**/
async function hasUserTotal(id, amount) {
    return ((await getUserTotal(id)) >= amount)
}

export { getUserBank, hasUserBank, getUserCoins, hasUserCoins, getUserTotal, hasUserTotal }