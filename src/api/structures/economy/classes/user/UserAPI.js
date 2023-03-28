import { Bank } from '../../models/Bank.js';
import { Danpen } from '../../models/Danpen.js';
import { Total } from '../../models/Total.js';
import { Wallet } from '../../models/Wallet.js';
import { Inventory } from '../../../inventory/classes/Inventory.js';
import { EconomyData, saveAll } from '../../../../database/economy/EconomyData.js';


export class User {
    constructor(id) {
        /**
         * id do usuario.
         */
        this.userID = id

        /**
         * economia do usuário
         */
        this.economy = { wallet: new Wallet(this.userID), bank: new Bank(this.userID), total: new Total(this.userID), danpen: new Danpen(this.userID), db: new EconomyData(this.userID) }

        /**
         * inventário do usuário
         * @type {Inventory}
         */
        this.inventory = new Inventory(this.userID)

    }
}

let user = new User(1)

if (!user.economy.db.isInDb()) user.economy.db.putInDb()
console.log('Coins', (await user.economy.wallet.get()).amount, '\nBanco', (await user.economy.bank.get()).amount)
console.log(' ', '\n ')
if (await user.economy.total.has(1000)) await user.economy.total.remove(1000)
else await user.economy.wallet.add(2000)
console.log('Coins', (await user.economy.wallet.get()).amount, '\nBanco', (await user.economy.bank.get()).amount)

await saveAll()