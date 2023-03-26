import { Bank } from '../models/Bank.js';
import { Total } from '../models/Total.js';
import { Wallet } from '../models/Wallet.js';


export class User {
    constructor(id) {
        /**
         * id do usuario.
         */
        this.userID = id

        /**
         * economia do usuário
         */
        this.economy = { wallet: new Wallet(this.userID), bank: new Bank(this.userID), total: new Total(this.userID) }

    }
}