import { db } from "../../../../database/user/UserData";
import { has } from "../get/hasUserVIP";

/** 
 * adiciona dias ao VIP do usuário
 * @param {number} userID - id do usuário
 * @param {number} days - dias
 * **/
export function add(userID, days, options = { group: 1 }) {
    let userDB = db.data.users.find(search => search.id === userID)

    if (has(userID)) userDB.premium.days += days
    else {
        userDB.premium.since = Date.now()
        userDB.premium.days.timestamp = Date.now()
        userDB.premium.days.value = days
        userDB.premium.group = options.group
        userDB.permissions._VIP = true
    }

}