import { db } from "../../../../../database/inventory/InventoryData.js";

/** 
 * retorna duracao do booster ativado
 * @param {number} id - id do usuario
 * @param {number} itemID - id do item no inventario do usuario
 * **/
export function getBoosterDuration(id, itemID) {
    let userInventory = db.data.invs.find(search => search.id === id).items
    let inventoryItem = userInventory.find(search => search.id === itemID)
    let itemDuration = inventoryItem.duration * 60000
    let itemTimestart = inventoryItem.timestart

    return (itemDuration - (Date.now() - itemTimestart))
}