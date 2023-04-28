import { initEconomyData, saveEconomyData } from "./src/api/database/economy/EconomyData.js";
import { initInventoryData, saveInventoryData } from "./src/api/database/inventory/InventoryData.js";
import { initUserData, saveUserData } from "./src/api/database/user/UserData.js";
import { addUserEarnings } from "./src/api/structures/economy/functions/command/post/addUserEarnings.js";
import { User } from "./src/api/structures/user/classes/user/UserAPI.js";
import { initVIPs } from "./src/api/structures/user/models/VIP.js";

function parseMilliseconds(milliseconds) {
    if (typeof milliseconds !== 'number') {
        throw new TypeError('Expected a number');
    }

    return {
        year: Math.floor(milliseconds / 31536000000),
        month: Math.floor(milliseconds / 2629800000) % 12,
        week: Math.floor(milliseconds / 604800017) % 4,
        days: Math.floor(milliseconds / 86400000) % 30,
        hours: Math.floor(milliseconds / 3600000) % 24,
        minutes: Math.floor(milliseconds / 60000) % 60,
        seconds: Math.floor(milliseconds / 1000) % 60,
        milliseconds: Math.floor(milliseconds) % 1000,
    };
}

// iniciando databases
setTimeout(async () => {

    await initUserData()
    await initEconomyData()
    await initInventoryData()
    initVIPs()

    console.log("\n[DATABASE] Os bancos de dados de [USUÁRIOS | ECONOMIA | INVENTÁRIOS] foram inicados.\n")


    let user = new User(13)

    if (!user.db.isInDb()) user.db.putInDb()
    if (!user.economy.db.isInDb()) user.economy.db.putInDb()

    // testando comandos (work)
    if (user.economy.command.work.can() === true) {
        addUserEarnings(user.userID, "work")

        user.economy.command.work.set()
    } else console.log(`[ECONOMIA - WORK] Faltam ${parseMilliseconds(user.economy.command.work.can().delay).minutes} minutos para poder trabalhar`)

}, 0)

setInterval(async () => {

    await saveUserData()
    await saveEconomyData()
    await saveInventoryData()

    console.log("\n[DATABASE] Os bancos  de dados de [USUÁRIOS | ECONOMIA | INVENTÁRIOS] foram salvos.\n")

}, 15000)