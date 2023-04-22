import { db } from "../../../../database/inventory/InventoryData.js";
/**
*  retorna todos os itens do inventário
*  @param {any} id - id do usuário
*   
**/
export async function getItemList(id) {
    return db.data.invs.find(search => search.id === id).items
}

/**
*  retorna certo item do inventário
*  @param {any} id - id do usuário
*  @param {number} id - id do item
*   
**/
export async function getItem(id, item_id) {
    return db.data.invs.find(search => search.id === id).items.find(itemSearch => itemSearch.id === item_id)
}


/**
*  verifica se há item no inventário com/sem quantia
*  @param {any} id - id do usuário
*  @param {number} item_id - id do item
*  @param {number} amount - quantidade do item
*   
**/
export async function hasItem(id, item_id, amount = 1) {
    let userInventory = db.data.invs.find(search => search.id === id).items
    let itemInventory = userInventory.find(search => search.id === item_id)

    if (itemInventory && itemInventory.amount >= amount) return true
    else return false

}