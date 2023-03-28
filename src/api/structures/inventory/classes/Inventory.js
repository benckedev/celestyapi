import { getItem, getItemList, hasItem } from "../functions/get/listItems.js"
import { addItem, removeItem } from "../functions/post/addItem.js"
import { ItemList } from "../models/item/ItemList.js"

export class Inventory {
    #userID
    constructor(id) {
        this.#userID = id
    }

    /**
    *  retorna item do inventário
    *  @param {number} itemID - id do item
    **/
    async get(itemID) {
        return await getItem(this.#userID, itemID)
    }

    /** 
     * adiciona item ao inventário
     * @param {ItemList} itemList - lista de itens
     * @param {number} itemID - id do item
     * @param {number} amount - quantidade
     * **/
    async add(itemList, itemID, amount = 1) {
        let item = itemList.get(itemID)
        return await addItem(this.#userID, item, amount)
    }

    /** 
     * adiciona item ao inventário
     * @param {ItemList} itemList - lista de itens
     * @param {number} itemID - id do item
     * @param {number} amount - quantidade
     * **/
    async remove(itemID, amount = 1) {
        return await removeItem(this.#userID, itemID, amount)
    }

    /**
    *  verifica se há certo item no inventário
    *  @param {number} itemID - id do item
    *  @param {number} amount - quantidade do item
    **/
    async has(itemID, amount = 1) {
        return await hasItem(this.#userID, itemID, amount)
    }

    /**
    *  retorna todos os itens do inventário
    **/
    async list() {
        return await getItemList(this.#userID)
    }

}