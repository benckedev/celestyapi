import format from '../../../utils/functions/format.js'
import { getUserLevel, getUserXP } from '../functions/xp/get/getUserInfo.js';
import { addUserXP, userLevelUp } from '../functions/xp/post/addUserXP.js';
import { removeUserXP, removeUserLevel } from '../functions/xp/post/removeUserXP';
import { setUserXP, setUserLevel } from '../functions/xp/post/setUserXP.js'

export class XP {
    #userID

    constructor(id) {
        this.#userID = id;
    }
    /**
     *
     * retorna valor de xp do usuário
     * 
     **/
    async getXP() {

        let value = await getUserXP(this.#userID)

        return {
            amount: value,
            formatted: {
                pt_br: format({ n: value, pt_br: true }),
                en_us: format({ n: value, pt_br: false })

            }
        }
    }

    /**
     *
     * retorna level do usuário
     * 
     **/
    async getLevel() {

        let value = await getUserLevel(this.#userID)

        return {
            amount: value,
            formatted: {
                pt_br: format({ n: value, pt_br: true }),
                en_us: format({ n: value, pt_br: false })

            }
        }
    }

    /** 
     * adiciona xp no banco do usuario
     * @param {number} amount - quantia para setar
     * 
     **/
    async addXP(amount = 1) {
        return addUserXP(this.#userID, amount)
    }

    /** 
     * upa usuario de level
     * @param {number} amount - quantia para setar
     * 
     **/
    async upLevel(amount = 1) {
        return userLevelUp(this.#userID, amount)
    }

    /** 
     * seta xp do usuario
     * @param {number} amount - quantia para setar
     * 
     **/
    async setXP(amount = 1) {
        return setUserXP(this.#userID, amount)
    }

    /** 
     * seta level do usuario
     * @param {number} amount - quantia para setar
     * 
     **/
    async setLevel(amount = 1) {
        return setUserLevel(this.#userID, amount)
    }

    /**
     * remove XP do usuário
     * @param {number} amount - quantia para remover
     * 
     **/
    async removeXP(amount = 1) {
        return removeUserXP(this.#userID, amount)
    }

    /**
     * remove level do usuário
     * @param {number} amount - quantia para remover
     * 
     **/
    async removeLevel(amount = 1) {
        return removeUserLevel(this.#userID, amount)
    }
}