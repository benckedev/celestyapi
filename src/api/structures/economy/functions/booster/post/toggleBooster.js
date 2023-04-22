import { db } from "../../../../../database/inventory/InventoryData.js"
import { removeItem } from "../../../../inventory/functions/post/addItem.js"

/** 
 * ativa/desativa um booster
 * @param {number} id - id do usuario
 * @param {number} itemID - id do item no inventario
 * **/
export async function toggleBooster(id, itemID) {
    let userInventory = db.data.invs.find(search => search.id === id).items
    let inventoryItem = userInventory.find(search => search.id === itemID)

    switch (inventoryItem.activated) {
        case true:
            inventoryItem.activated = false
            inventoryItem.timestart = 0
            await removeItem(id, itemID, 1)

        default:
            inventoryItem.activated = true
            inventoryItem.timestart = Date.now()
    }
}