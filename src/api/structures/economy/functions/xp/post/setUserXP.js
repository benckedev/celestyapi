import { db } from "../../../../../database/economy/EconomyData.js"

/**
* função para setar XP do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para setar
**/
export async function setUserXP(id, amount) {
    db.data.users.find(search => search.id === id).xp = amount
}

/**
* função para setar level do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para setar
**/
export async function setUserLevel(id, amount) {
    db.data.users.find(search => search.id === id).level = amount
}