import { db } from "../../../../../database/economy/EconomyData.js";

/**
* função para adicionar coins ao usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
async function addUserCoins(id, amount) {
    if (amount <= 0) throw Error('O valor mínimo de coins a serem adicionados deve ser maior que 0.')
    db.data.users.find(search => search.id === id).coins += amount
}

/**
* função para adicionar coins no banco do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
async function addUserBank(id, amount) {
    if (amount <= 0) throw Error('O valor mínimo de coins a serem adicionados deve ser maior que 0.')
    db.data.users.find(search => search.id === id).bank += amount
}

export { addUserCoins, addUserBank }