import { db } from "../../../database/user/UserData.js"
import { User } from "../classes/user/UserAPI.js"
import { get } from "../functions/get/getUserVIP.js"
import { has as hasUserVIP } from "../functions/get/hasUserVIP.js"
import { add as addUserVIP } from "../functions/post/addUserVIP.js"
import { remove } from "../functions/post/removeUserVIP.js"

export function initVIPs() {
    const timeout_id = []
    let usersDB = db.data.users.filter(u => u.permissions._VIP === true)

    usersDB.forEach(u => {
        let u_timeout = setTimeout(() => {
            let user = new User(u.id)
            let vipInfo = user.vip.info()
            if (vipInfo.days.value * 86400000 - (Date.now() - vipInfo.days.timestamp) <= 0) {
                user.vip.unset()
            }
        }, (u.premium.days.value * 86400000 - (Date.now() - u.premium.days.timestamp)))

        timeout_id.push(u_timeout)
    })

    setTimeout(() => {
        timeout_id.forEach(u => {
            clearTimeout(u)
        })

        initVIPs()

    }, 1800000)
}

export class VIP {
    #userID
    constructor(id) {
        this.#userID = id
    }

    /**
     * o usuário é VIP?
    * **/
    has() {
        return hasUserVIP(this.#userID)
    }

    /** 
     * adiciona dias de VIP ao usuário
     * group 1 - booster
     * group 2 - VIP
     * @param {number} days - dias
     * **/
    add(days, options = { group: 0 }) {
        return addUserVIP(this.#userID, days, { group: options.group })
    }

    /**
     * remove o VIP do usuário
     * **/
    unset() {
        return remove(this.#userID)
    }

    /**
     * retorna informações do VIP do usuário
    * **/
    info() {
        return get(this.#userID)
    }
}