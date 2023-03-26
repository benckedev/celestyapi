import { getUserBank } from "../../../functions/economy/Coins/get/getUserCoins.js";
import { setUserBank } from "../../../functions/economy/Coins/post/setUserCoins.js";
import { removeUserBank } from '../../../functions/economy/Coins/post/removeUserCoins.js'
import format from '../../../functions/economy/formatter.js'

export class Bank {
    #userID

    constructor(id) {
        this.#userID = id;
    }
    /**
     *
     * retorna valor de coins no carteira do usuário
     * 
     **/
    async get() {

        let value = await getUserBank(this.#userID)

        return {
            amount: value,
            formatted: {
                pt_br: format({ n: value, pt_br: true }),
                en_us: format({ n: value, pt_br: false })

            }
        }
    }

    /** 
     * adiciona coins no banco do usuario
     * @param {number} amount - quantia para setar
     * 
     **/
    async set(amount = 1) {
        return setUserBank(this.#userID, amount)
    }

    /**
     * remove coins do banco do usuário
     * @param {number} amount - quantia para remover
     * 
     **/
    async remove(amount = 1) {
        return removeUserBank(this.#userID, amount)
    }
}