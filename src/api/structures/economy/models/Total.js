import { getUserBank, getUserCoins, hasUserTotal } from '../functions/coins/get/getUserCoins.js'
import { removeUserAny } from '../functions/coins/post/removeUserCoins.js'
import format from '../../../utils/functions/format.js'

export class Total {
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

        let coins = await getUserCoins(this.#userID)
        let bank = await getUserBank(this.#userID)

        return {
            amount: coins + bank,
            formatted: {
                pt_br: format({ n: coins + bank, pt_br: true }),
                en_us: format({ n: coins + bank, pt_br: false })
            },
            coins: {
                amount: coins,
                formatted: {
                    pt_br: format({ n: coins, pt_br: true }),
                    en_us: format({ n: coins, pt_br: false })

                }
            },
            bank: {
                amount: bank,
                formatted: {
                    pt_br: format({ n: bank, pt_br: true }),
                    en_us: format({ n: bank, pt_br: false })

                }
            }
        }
    }

    /**
     * remove coins da carteira e do banco do usuário
     * @param {number} amount - quantia para remover
     * 
     **/
    async remove(amount = 1) {
        return removeUserAny(this.#userID, amount)
    }

    /** 
     * verifica se o usuário tem certa quantia na carteira e no banco
     * @param {number} amount - quantia para verificar
     * 
     **/
    async has(amount = 1) {
        return hasUserTotal(this.#userID, amount)
    }
}