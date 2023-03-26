import { Bank } from '../economy/models/Bank.js';
import { Danpen } from '../economy/models/Danpen.js';
import { Total } from '../economy/models/Total.js';
import { Wallet } from '../economy/models/Wallet.js';
import { Inventory } from '../inventory/Inventory.js';


export class User {
    constructor(id) {
        /**
         * id do usuario.
         */
        this.userID = id

        /**
         * economia do usuário
         * @type {Wallet, Bank, Total, Danpen}
         */
        this.economy = { wallet: new Wallet(this.userID), bank: new Bank(this.userID), total: new Total(this.userID), danpen: new Danpen(this.userID) }

        /**
         * inventário do usuário
         * @type {Inventory}
         */
        this.inventory = new Inventory(this.userID)

    }
}