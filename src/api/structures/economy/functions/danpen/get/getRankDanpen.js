import { db } from "../../../../../database/economy/EconomyData.js";
/** 
 * 
 * retorna ranking de coins
 * @param {any} guildID - ID do servidor (opcional)
 * 
 * **/
export async function getRankDanpen(options = { guildMembers: [] }) {
    db = db.data.users.sort((a, b) => b.danpen - a.danpen)
    let topUsers = [];
    if (!options.guild) {
        for (i = 0; i <= 10; i++) {
            topUsers.push({ id: db[i].id, coins: db[i].danpen })
        }
    } else {
        let i = 0;
        do {
            if (options.guildMembers.findIndex(search => search.id === db[i]) !== -1) {
                topUsers.push({ id: db[i].id, coins: db[i].danpen })
                i++;
            }
        } while (i < 11)
    }

    return topUsers
}