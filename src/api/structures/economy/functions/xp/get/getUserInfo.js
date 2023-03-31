import { db } from "../../../../../database/economy/EconomyData.js"

/**
* função para receber quantia xp
* @param {any} id - id do usuário
**/
export async function getUserXP(id) {
    return (await db.data.users.find(search => search.id === id)).xp
}

/**
* função para receber level do usuario
* @param {any} id - id do usuário
**/
export async function getUserLevel(id) {
    return (await db.data.users.find(search => search.id === id)).level
}

/**
* verifica se o usuário há xp suficiente para upar de nivel
* @param {any} id - id do usuário
**/
export async function getUserUp(id) {
    let userXP = await getUserXP(id)
    let userLevel = await getUserLevel(id)
    let calc = userLevel * 135

    if (userXP >= calc) return true
    else return false
}