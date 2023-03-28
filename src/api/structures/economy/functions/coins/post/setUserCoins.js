import { db } from "../../../../../database/economy/EconomyData.js";
/**
* função para setar coins do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para setar
**/
async function setUserCoins(id, amount) {
    db.data.users.find(search => search.id === id).coins = amount
}

/**
* função para setar coins no banco do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para setar
**/
async function setUserBank(id, amount) {
    db.data.users.find(search => search.id === id).bank = amount
}

export { setUserCoins, setUserBank }