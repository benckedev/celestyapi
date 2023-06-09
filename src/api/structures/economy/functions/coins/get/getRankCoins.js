import { db as economyDb } from "../../../../../database/economy/EconomyData.js";
/** 
 * 
 * retorna ranking de coins
 * @param {any} guildID - ID do servidor (opcional)
 * 
 * **/
export async function getRankCoins(options = { guildMembers: [] }) {
    let db = economyDb.data.users.sort((a, b) => (b.coins + b.bank) - (a.coins + a.bank))
    let topUsers = [];
    if (!options.guild) {
        for (let i = 0; i <= 10; i++) {
            if (db[i]) topUsers.push({ id: db[i].id, coins: db[i].coins + db[i].bank })
        }
    } else {
        let i = 0;
        do {
            if (options.guildMembers.findIndex(search => search.id === db[i]) !== -1) {
                topUsers.push({ id: db[i].id, coins: db[i].coins + db[i].bank })
                i++;
            }
        } while (i < 11)
    }

    return topUsers
}