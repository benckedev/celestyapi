import { get as getUserVIP } from "../../../../user/functions/get/getUserVIP.js"
import { has as hasUserVIP } from "../../../../user/functions/get/hasUserVIP.js"
import { hasBoosterActivated } from "../../booster/get/hasBoosterActivated.js"
import { addUserCoins } from "../../coins/post/addUserCoins.js"
import { addUserXP } from "../../xp/post/addUserXP.js"

export var earnings = {
    work: {
        min: 80,
        max: 145
    },
    crime: {
        min: 246,
        max: 620
    },
    explore: {
        min: 710,
        max: 975
    },
    fish: {
        min: 180,
        max: 300
    },
    mine: {
        min: 356,
        max: 534
    },
}

export var earningsXP = {
    work: {
        min: 3,
        max: 5
    },
    crime: {
        min: 5,
        max: 8
    },
    explore: {
        min: 16,
        max: 16
    },
    fish: {
        min: 6,
        max: 10
    },
    mine: {
        min: 12,
        max: 17
    },
}

/** 
 * @param {number} id - id do usuário
 * @param {string} cmd - comando utilizado
 * adiciona fundos ao usuário
 * **/
export async function addUserEarnings(id, cmd) {
    let bonus = {
        coins: {
            min: 0,
            max: 0,
        },
        xp: 0
    }

    // verifica se o usuário é VIP
    if (hasUserVIP(id)) {
        const userVIP = getUserVIP(id)

        switch (userVIP.group) {
            case 1:
                bonus.coins.min += 1.5
                bonus.coins.max += 1.5
                break;
            default:
                bonus.coins.min += 2.0
                bonus.coins.max += 2.0
                bonus.xp += 2.0
        }
    }

    // verifica se o usuário tem um multiplicador ativado em seu inventário
    const hasBooster = hasBoosterActivated(id)
    if (hasBooster != undefined) {
        bonus.coins.min += hasBooster.multiplier.coins.min
        bonus.coins.max += hasBooster.multiplier.coins.max
        bonus.xp += hasBooster.multiplier.xp
    }

    let bonus_coins = 0;
    let earning = Math.floor(Math.random() * earnings[cmd].max) + earnings[cmd].min
    let xp = Math.floor(Math.random() * earningsXP[cmd].max) + earningsXP[cmd].min

    if (bonus.coins.min != 0 && bonus.coins.max != 0) {
        bonus_coins = Math.floor(Math.random() * bonus.coins.max) + bonus.coins.min
        earning = Math.floor(earning * bonus_coins)
    }

    if (bonus.xp != 0) xp = xp * bonus.xp
    await addUserCoins(id, earning, { transaction: false })
    await addUserXP(id, xp)

    return {
        coins: {
            default: earning - bonus_coins,
            bonus: bonus_coins,
            total: earning
        },
        xp: xp
    }
}   