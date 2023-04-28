import { db as economyDb } from "../../../../../database/economy/EconomyData.js";
/** 
 * 
 * retorna ranking de coins
 * @param {any} guildID - ID do servidor (opcional)
 * 
 * **/
export async function getRankRep(options = { guildMembers: [] }) {
    let db = economyDb.data.users.sort((a, b) => (b.rep + b.rep) - (a.rep + a.rep))
    let topUsers = [];
    if (!options.guild) {
        for (let i = 0; i <= 10; i++) {
            if (db[i]) topUsers.push({ id: db[i].id, rep: db[i].rep })
        }
    } else {
        let i = 0;
        do {
            if (options.guildMembers.findIndex(search => search.id === db[i]) !== -1) {
                topUsers.push({ id: db[i].id, rep: db[i].rep })
                i++;
            }
        } while (i < 11)
    }

    return topUsers
}