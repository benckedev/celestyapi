import { getUserCoins, hasUserCoins } from "../../../functions/economy/coins/get/getUserCoins.js";
import { setUserCoins } from "../../../functions/economy/coins/post/setUserCoins.js";
import { removeUserCoins } from '../../../functions/economy/coins/post/removeUserCoins.js'
import format from '../../../functions/economy/formatter.js'

export class Wallet {
    #userID

    constructor(id) {
        this.#userID = id;
    }
    /**
     *
     * retorna valor de coins na carteira do usuário
     * 
     **/
    async get() {

        let value = await getUserCoins(this.#userID)

        return {
            amount: value,
            formatted: {
                pt_br: format({ n: value, pt_br: true }),
                en_us: format({ n: value, pt_br: false })

            }
        }
    }

    /** 
     * adiciona coins na carteira do usuario
     * @param {number} amount - quantia para setar
     * 
     **/
    async set(amount = 1) {
        return setUserCoins(this.#userID, amount)
    }

    /**
     * remove coins da carteira do usuário
     * @param {number} amount - quantia para remover
     * 
     **/
    async remove(amount = 1) {
        return removeUserCoins(this.#userID, amount)
    }

    /** 
     * verifica se o usuário tem certa quantia na carteira
     * @param {number} amount - quantia para verificar
     * 
     **/
    async has(amount = 1) {
        return hasUserCoins(this.#userID, amount)
    }
}