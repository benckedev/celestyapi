import { db } from "../../../../../database/economy/EconomyData.js";
import { getUserUp } from "../get/getUserInfo.js";
/**
* função para adicionar XP ao usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para adicionar
**/
export async function addUserXP(id, amount) {
    db.data.users.find(search => search.id === id).xp += amount
    let obj_up = { level_up: false, new_level: 0 }
    if (await getUserUp(id) === true) {
        obj_up.new_level = await userLevelUp(id)
    }

    return obj_up
}

export async function userLevelUp(id) {
    let userDB = db.data.users.find(search => search.id === id)
    let userXP = userDB.xp
    let userLevel = userDB.level

    if (await getUserUp(id) === true) {
        userDB.xp = userXP - (userLevel * 135)
        userDB.level += 1
    } else {
        userDB.level += 1
    }

    return (userLevel + 1)
}