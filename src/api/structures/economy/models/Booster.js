import { db } from "../../../database/inventory/InventoryData"
import { getBoosterDuration } from "../functions/booster/get/getBoosterDuration"
import { hasBoosterActivated } from "../functions/booster/get/hasBoosterActivated"
import { toggleBooster } from "../functions/booster/post/toggleBooster"


export function initBooster() {
    const timeout_list = []
    db.data.invs.filter(u => hasBoosterActivated(u.id) != undefined).forEach(b => {
        let item = hasBoosterActivated(u.id)
        let duration = getBoosterDuration(u.id, item.id)
        let timeout = setTimeout(async () => {
            await toggleBooster(u.id, item.id)
        }, duration)

        timeout_list.push(timeout)
    })

    /** a cada 10 minutos ele reiniciará a verificação de booster delay **/
    setTimeout(() => {
        timeout_list.forEach(t => clearInterval(t))

        initBooster()
    }, 600000)
}

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