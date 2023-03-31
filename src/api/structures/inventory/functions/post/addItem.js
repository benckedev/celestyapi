import { db } from "../../../../database/inventory/InventoryData.js"

/** 
 * adiciona item ao inventário com certa quantia
 * @param {any} id - id do usuario
 * @param {object} item - item desejado
 * @param {number} amount - quantidade
 * **/
export async function addItem(id, item, amount = 1) {
    db.data.invs.find(search => search.id === id).items.push({ ...item, amount: amount })
}

/** 
 * remove item ao inventário com certa quantia (quantidade 0 para tudo)
 * @param {any} id - id do usuario
 * @param {object} itemID - id do item desejado
 * @param {number} amount - quantidade
 * **/
export async function removeItem(id, itemID, amount = 1) {
    let userInventory = db.data.invs.find(search => search.id === id).items
    let itemInventory = userInventory.find(search => search.id === itemID)

    if (itemInventory.amount > 1) itemInventory.amount -= amount
    else {
        let itemIndex = userInventory.findIndex(search => search.id === itemID)
        userInventory.splice(itemIndex, 1)
    }

}