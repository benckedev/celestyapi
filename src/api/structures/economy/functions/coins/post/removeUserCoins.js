import { db } from "../../../../../database/economy/EconomyData.js";
import { getUserBank, getUserCoins, getUserTotal } from "../get/getUserCoins.js";
/**
* função para remover coins do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserCoins(id, amount, options = { transaction: true }) {
    if (await getUserCoins(id) < amount) throw Error('O usuário há menos coins na carteira que o necessário para remover.')
    let userDB = db.data.users.find(search => search.id === id)
    userDB.coins -= amount
    if (options.transaction !== false) userDB.transactions.push({ method: "REM", in: "WALLET", date: Date.now(), amount: amount })
}

/**
* função para remover coins no banco do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserBank(id, amount, options = { transaction: true }) {
    if (await getUserBank(id) < amount) throw Error('O usuário há menos coins no banco que o necessário para remover.')
    let userDB = db.data.users.find(search => search.id === id)
    userDB.bank -= amount
    if (options.transaction !== false) userDB.transactions.push({ method: "REM", in: "BANK", date: Date.now(), amount: amount })
}

/**
* função para remover coins no banco e na mao do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserAny(id, amount, options = { transaction: true }) {
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
    if (options.transaction !== false) userDb.transactions.push({ method: "REM", in: "ANY", date: Date.now(), amount: amount })
}

export { removeUserCoins, removeUserBank, removeUserAny }