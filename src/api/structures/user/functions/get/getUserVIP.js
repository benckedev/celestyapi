import { db } from "../../../../database/user/UserData";

/** 
 * retorna informações do VIP
 * @param {number} userID - id do usuário
**/
export function get(userID) {
    let userDB = db.data.users.find(search => search.id === userID)

    return userDB.premium
}