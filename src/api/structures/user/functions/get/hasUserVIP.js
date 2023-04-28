import { db } from "../../../../database/user/UserData.js";

/** 
 * verifica se o usuário há VIP
 * @param {number} userID - id do usuário
**/
export function has(userID) {
    let userDB = db.data.users.find(search => search.id === userID)

    return userDB.permissions._VIP
}