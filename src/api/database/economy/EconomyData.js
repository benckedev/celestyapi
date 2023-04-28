import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { InventoryData } from '../inventory/InventoryData.js'

// registro da database
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'file/eco_data.json')

const adapter = new JSONFile(file)
export const db = new Low(adapter)


/** 
 * inicia a database de economia
 * **/
export async function initEconomyData() {
    await db.read()
    db.data ||= { users: [] }
}

// 

export class EconomyData {
    #userID
    constructor(id) {
        this.#userID = id
    }

    /** 
     * verifica se o usuário está na DB de economia
     * **/
    isInDb() {
        return (db.data.users.findIndex(search => search.id === this.#userID) !== -1)
    }

    /**
     * bota o usuário na DB
     * **/
    putInDb() {
        if (this.isInDb === true) throw Error('O usuário já está na database de economia.')
        db.data.users.push({
            id: this.#userID,
            coins: 0,
            bank: 0,
            danpen: 0,
            xp: 0,
            level: 1,
            rep: 0,
            delay: {
                work: 0,
                crime: 0,
                steal: 0,
                explore: 0,
                fish: 0,
                mine: 0,
                mate: 0,
                pay: 0
            },
            transactions: []
        })

        let userInventory = new InventoryData(this.#userID)
        userInventory.putInDb()
    }

    /** 
     * remove o usuário da database
     * **/
    removeFromDb() {
        if (this.isInDb === false) throw Error('O usuário não está na database de economia.')
        let userIndex = db.data.users.findIndex(search => search.id === this.#userID)
        db.data.users.splice(userIndex, 1)
    }
}

export async function saveEconomyData() {
    await db.write()
}
