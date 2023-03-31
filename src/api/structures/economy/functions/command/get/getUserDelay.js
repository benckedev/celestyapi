import { db } from "../../../../../database/economy/EconomyData.js";


// delays em minutos
export var delay = {
    work: 30,
    crime: 45,
    steal: 50,
    explore: 80,
    fish: 60,
    mine: 90,
    pay: 3
}


/** 
 * verifica se o usuário pode executar tal comando
 * @param {any} id - id do usuário
 * @param {string} command - comando
 * **/
export function can(id, command = "") {
    command = command.toLocaleLowerCase()
    let userDB = db.data.users.find(search => search.id === id)
    console.log(userDB)
    let userDelay = userDB.delay[command];
    let delayDB = delay[command] * 60000

    if (delayDB - (Date.now() - userDelay) > 0) return { delay: delayDB - (Date.now() - userDelay) }
    else return true
}