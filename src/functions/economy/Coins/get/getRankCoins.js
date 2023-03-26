/** 
 * 
 * retorna ranking de coins
 * @param {any} guildID - ID do servidor (opcional)
 * 
 * **/
export async function getRankCoins(options = { guildID: 0 }) {

    if (!options.guildID || options.guildID === 0) {
        //code ranking global
    } else {
        // code ranking guild
    }

}