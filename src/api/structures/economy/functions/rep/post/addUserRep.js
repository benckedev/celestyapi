import { db } from "../../../../../database/economy/EconomyData.js";


/**  
 * adiciona rep ao usuário
 * @param {number} id - id do usuário
 * @param {number} target - quem deu o rep
 * **/
export function addUserRep(id, target) {
    let userDB = db.data.users.find(search => search.id === id)
    userDB.rep += 1;
    userDB.transactions.push({ method: "REP", in: "REP", date: Date.now(), target: target })
}