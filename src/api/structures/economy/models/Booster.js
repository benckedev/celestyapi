import { getBoosterDuration } from "../functions/booster/get/getBoosterDuration"
import { hasBoosterActivated } from "../functions/booster/get/hasBoosterActivated"
import { toggleBooster } from "../functions/booster/post/toggleBooster"

export class Booster {
    #userID
    constructor(id) {
        this.#userID = id
    }

    /** 
     * verifica se há algum booster ativado
     * **/
    activated() {
        return hasBoosterActivated(this.#userID)
    }

    /** 
     * ativa/desativa um booster
     * @param {number} itemID - id do item no inventario do usuario
     * **/
    async toggle(itemID) {
        return await toggleBooster(this.#userID, itemID)
    }

    /**
     * retorna o tempo que falta para acabar o boost
     * @param {number} itemID - id do item no inventario do usuario
     *  **/
    duration(itemID) {
        return getBoosterDuration(this.#userID, itemID)
    }

}