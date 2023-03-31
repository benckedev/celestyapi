import { db } from "../../../../../database/inventory/InventoryData.js";

/** 
 * retorna se há algum booster ativado
 * @param {number} id - id do usuario
 * **/
export function hasBoosterActivated(id) {
    let userInventory = db.data.invs.find(search => search.id === id).list
    let inventoryBooster = userInventory.find(search => search.name.toLowerCase().startsWith('booster') && search.activated === true)
    return inventoryBooster
}