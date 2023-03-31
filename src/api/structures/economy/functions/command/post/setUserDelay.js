import { db } from "../../../../../database/economy/EconomyData.js";
/** 
 * seta delay do usuário para exercer o comando
 * @param {any} id - id do usuário
 * @param {string} command - comando
 * **/
export function set(id, command = "") {
    command = command.toLocaleLowerCase()
    let userDB = db.data.users.find(search => search.id === id)
    userDB.delay[command] = Date.now()
}