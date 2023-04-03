import { db } from "../../../../../database/economy/EconomyData.js";

/**
* função para adicionar coins ao usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
async function addUserCoins(id, amount, options = { transaction: true }) {
    if (amount <= 0) throw Error('O valor mínimo de coins a serem adicionados deve ser maior que 0.')
    let userDB = db.data.users.find(search => search.id === id)
    userDB.coins += amount
    if (options.transaction !== false) userDB.transactions.push({ method: "ADD", in: "WALLET", date: Date.now(), amount: amount })
}

/**
* função para adicionar coins no banco do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
async function addUserBank(id, amount, options = { transaction: true }) {
    if (amount <= 0) throw Error('O valor mínimo de coins a serem adicionados deve ser maior que 0.')

    let userDB = db.data.users.find(search => search.id === id)
    userDB.bank += amount
    if (options.transaction !== false) userDB.transactions.push({ method: "ADD", in: "BANK", date: Date.now(), amount: amount })
}

export { addUserCoins, addUserBank }