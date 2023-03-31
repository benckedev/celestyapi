import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'


// registro da database
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'file/inv_data.json')

const adapter = new JSONFile(file)
export const db = new Low(adapter)


/** 
 * inicia a database de inventarios
 * **/
export async function initInventoryData() {
    await db.read()
    db.data ||= { invs: [] }
}

// 

export class InventoryData {
    #userID
    constructor(id) {
        this.#userID = id
    }

    /** 
     * verifica se o usuário está na DB de inventarios
     * **/
    isInDb() {
        return (db.data.invs.findIndex(search => search.id === this.#userID) !== -1)
    }

    /**
     * bota o usuário na DB
     * **/
    putInDb() {
        if (this.hasDb === true) throw Error('O usuário já está na database de inventarios.')
        db.data.invs.push({
            id: this.#userID,
            items: []
        })
    }

    /** 
     * remove o usuário da database
     * **/
    removeFromDb() {
        if (this.hasDb === false) throw Error('O usuário não está na database de inventarios.')
        let userIndex = db.data.invs.findIndex(search => search.id === this.#userID)
        db.data.invs.splice(userIndex, 1)
    }
}

export async function saveInventoryData() {
    return await db.write()
}