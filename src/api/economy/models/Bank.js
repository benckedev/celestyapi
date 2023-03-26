import { getUserBank, hasUserBank } from "../../../functions/economy/coins/get/getUserCoins.js";
import { setUserBank } from "../../../functions/economy/coins/post/setUserCoins.js";
import { removeUserBank } from '../../../functions/economy/coins/post/removeUserCoins.js'
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

    /** 
     * verifica se o usuário tem certa quantia na carteira
     * @param {number} amount - quantia para verificar
     * 
     **/
    async has(amount = 1) {
        return hasUserBank(this.#userID, amount)
    }
}