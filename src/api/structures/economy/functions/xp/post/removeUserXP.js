import { db } from "../../../../../database/economy/EconomyData.js";

/**
* função para remover XP do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
export async function removeUserXP(id, amount) {
    let userDB = db.data.users.find(search => search.id === id)
    if (userDB.xp < amount) userDB.xp = 0
    else userDB.xp -= amount
}

/**
* função para remover level do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
export async function removeUserLevel(id, amount) {
    let userDB = db.data.users.find(search => search.id === id)
    if (userDB.level < amount) userDB.level = 1
    else userDB.level -= amount
}