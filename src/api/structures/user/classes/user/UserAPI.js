import { Bank } from '../../../economy/models/Bank.js';
import { Danpen } from '../../../economy/models/Danpen.js';
import { Total } from '../../../economy/models/Total.js';
import { Wallet } from '../../../economy/models/Wallet.js';
import { Inventory } from '../../../inventory/classes/Inventory.js';
import { EconomyData } from '../../../../database/economy/EconomyData.js';
import { Work } from '../../../economy/models/command/Work.js';
import { Crime } from '../../../economy/models/command/Crime.js';
import { Steal } from '../../../economy/models/command/Steal.js';
import { Explore } from '../../../economy/models/command/Explore.js';
import { Fish } from '../../../economy/models/command/Fish.js';
import { Mine } from '../../../economy/models/command/Mine.js';
import { VIP } from '../../models/VIP.js';


export class User {
    constructor(id) {
        /**
         * id do usuario.
         */
        this.userID = id

        /**
         * economia do usuário
         */
        this.economy = { wallet: new Wallet(this.userID), bank: new Bank(this.userID), total: new Total(this.userID), danpen: new Danpen(this.userID), db: new EconomyData(this.userID), command: { work: new Work(this.userID), crime: new Crime(this.userID), steal: new Steal(this.userID), explore: new Explore(this.userID), fish: new Fish(this.userID), mine: new Mine(this.userID) } }

        /**
         * inventário do usuário
         * @type {Inventory}
         */
        this.inventory = new Inventory(this.userID)


        /** 
         * controle do sistema de VIP
         * @type {VIP}
         * **/
        this.vip = new VIP(this.userID)

    }
}