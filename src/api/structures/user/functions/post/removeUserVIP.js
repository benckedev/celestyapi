import { db } from "../../../../database/user/UserData.js";

/**
 * remove o VIP do usuário
 * @param {number} userID - id do usuário
**/
export function remove(userID) {
    let userDB = db.data.users.find(search => search.id === userID)
    userDB.premium.since = 0
    userDB.premium.days.timestamp = 0
    userDB.premium.days.value = 0
    userDB.premium.group = 0
    userDB.permissions._VIP = false
}