import { db } from "../../../../../database/economy/EconomyData.js";

/**
* função para setar danpens do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para setar
**/
export async function setUserDanpen(id, amount) {
    db.data.users.find(search => search.id === id).danpen = amount
}