import { db } from "../../../../../database/inventory/InventoryData.js"
import { removeItem } from "../../../../inventory/functions/post/addItem.js"

/** 
 * ativa/desativa um booster
 * @param {number} id - id do usuario
 * @param {number} itemID - id do item no inventario
 * **/
export async function toggleBooster(id, itemID) {
    let userInventory = db.data.invs.find(search => search.id === id).list
    let inventoryItem = userInventory.find(search => search.id === itemID)

    switch (inventoryItem.activated) {
        case true:
            if (inventoryItem.amount === 1) {
                await removeItem(id, itemID)
            } else {
                inventoryItem.activated = false
                inventoryItem.timestart = 0
            }
        default:
            inventoryItem.activated = true
            inventoryItem.timestart = Date.now()
    }
}