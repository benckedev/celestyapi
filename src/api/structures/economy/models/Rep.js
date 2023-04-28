import format from '../../../utils/functions/format.js'
import { getUserRep } from '../functions/rep/get/getUserRep.js';
import { addUserRep } from '../functions/rep/post/addUserRep.js';
import { removeUserRep } from '../functions/rep/post/removeUserRep.js';

export class Rep {
    #userID

    constructor(id) {
        this.#userID = id;
    }
    /**
     *
     * retorna a quantidade de rep do usuário
     * 
     **/
    async get() {

        let value = getUserRep(this.#userID)

        return {
            amount: value,
            formatted: {
                pt_br: format({ n: value, pt_br: true }),
                en_us: format({ n: value, pt_br: false })

            }
        }
    }

    /** 
     * adiciona rep ao usuario
     * @param {number} amount - quantia para setar
     * @param {number} target - quem deu o rep
     **/
    async add(target) {
        return addUserRep(this.#userID, target)
    }

    /**
     * remove rep do usuário
     * @param {number} amount - quantia para remover
     **/
    async remove(amount = 1) {
        return removeUserRep(this.#userID, amount)
    }
}