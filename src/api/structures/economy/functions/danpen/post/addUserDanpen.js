import { db } from "../../../../../database/economy/EconomyData.js"

/**
* função para adicionar danpen ao usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
export async function addUserDanpen(id, amount, options = { transaction: true }) {
    let userDB = db.data.users.find(search => search.id === id)
    userDB.danpen += amount
    if (options.transaction !== false) userDB.transactions.push({ method: "ADD", in: "DANPEN", date: Date.now(), amount: amount })
}