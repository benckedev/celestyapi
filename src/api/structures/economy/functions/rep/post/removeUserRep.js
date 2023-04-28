import { db } from "../../../../../database/economy/EconomyData.js";

/** 
 * remove rep do usuário
 * @param {number} id - id do usuário
 * @param {number} amount - quantidade de rep
 *  **/
export function removeUserRep(id, amount = 1) {
    db.data.users.find(search => search.id == id).rep -= amount
}