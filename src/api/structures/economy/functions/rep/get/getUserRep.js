import { db } from "../../../../../database/economy/EconomyData.js";

/** 
 * retorna reps do usuário da db
 * @param {number} id - id do usuário
 * **/
export function getUserRep(id) {
    return db.data.users.find(search => search.id === id).rep
}