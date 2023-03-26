import { getUserDanpen, hasUserDanpen } from '../../../functions/economy/danpen/get/getUserDanpen.js'
import { setUserDanpen } from '../../../functions/economy/danpen/post/setUserDanpen.js'
import { removeUserDanpen } from '../../../functions/economy/danpen/post/removeUserDanpen.js'
import format from '../../../functions/economy/formatter.js'

export class Danpen {
    #userID

    constructor(id) {
        this.#userID = id;
    }
    /**
     *
     * retorna valor de danpen do usuário
     * 
     **/
    async get() {

        let value = await getUserDanpen(this.#userID)

        return {
            amount: value,
            formatted: {
                pt_br: format({ n: value, pt_br: true }),
                en_us: format({ n: value, pt_br: false })

            }
        }
    }

    /** 
     * adiciona danpen ao usuario
     * @param {number} amount - quantia para setar
     * 
     **/
    async set(amount = 1) {
        return setUserDanpen(this.#userID, amount)
    }

    /**
     * remove danpen do usuário
     * @param {number} amount - quantia para remover
     * 
     **/
    async remove(amount = 1) {
        return removeUserDanpen(this.#userID, amount)
    }

    /** 
     * verifica se o usuário tem certa quantia de danpen
     * @param {number} amount - quantia para verificar
     * 
     **/
    async has(amount = 1) {
        return hasUserDanpen(this.#userID, amount)
    }
}