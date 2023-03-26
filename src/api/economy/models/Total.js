import { getUserBank, getUserCoins } from "../../../functions/economy/Coins/get/getUserCoins.js";
import { removeUserAny } from '../../../functions/economy/Coins/post/removeUserCoins.js'
import format from '../../../functions/economy/formatter.js'

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
}