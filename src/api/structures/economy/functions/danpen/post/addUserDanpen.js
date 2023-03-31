import { db } from "../../../../../database/economy/EconomyData.js"

/**
* função para adicionar danpen ao usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
export async function addUserDanpen(id, amount) {
    db.data.users.find(search => search.id === id).danpen += amount
}