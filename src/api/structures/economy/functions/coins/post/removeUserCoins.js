import { db } from "../../../../../database/economy/EconomyData.js";
import { getUserBank, getUserCoins, getUserTotal } from "../get/getUserCoins.js";
/**
* função para remover coins do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserCoins(id, amount) {
    if (await getUserCoins(id) < amount) throw Error('O usuário há menos coins na carteira que o necessário para remover.')
    db.data.users.find(search => search.id === id).coins -= amount
}

/**
* função para remover coins no banco do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserBank(id, amount) {
    if (await getUserBank(id) < amount) throw Error('O usuário há menos coins no banco que o necessário para remover.')
    db.data.users.find(search => search.id === id).bank -= amount
}

/**
* função para remover coins no banco e na mao do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserAny(id, amount) {
    if (await getUserTotal(id) < amount) throw Error('O usuário há menos coins que o necessário para remover.')
    let userCoins = await getUserCoins(id)
    let userBank = await getUserBank(id)
    let diff = amount - userCoins

    let userDb = db.data.users.find(search => search.id === id)
    if (userCoins < amount) {
        amount = amount - diff
        if (amount < 0) amount = userCoins
        userDb.coins = amount - userCoins
        userDb.bank = userBank - diff
    } else {
        userDb.coins = userCoins - amount
        userDb.bank = userBank
    }
}

export { removeUserCoins, removeUserBank, removeUserAny }