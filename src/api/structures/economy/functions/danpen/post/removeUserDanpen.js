import { db } from "../../../../../database/economy/EconomyData.js"

/**
* função para remover danpen do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
export async function removeUserDanpen(id, amount, options = { transaction: true }) {
    let userDB = db.data.users.find(search => search.id === id)
    if (userDB.danpen < amount) userDB.danpen = 0
    else userDB.danpen -= amount

    if (options.transaction !== false) userDB.transactions.push({ method: "REM", in: "DANPEN", date: Date.now(), amount: amount })
}