import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'


const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'file/eco_data.json')

const adapter = new JSONFile(file)
export const db = new Low(adapter)

setTimeout(async () => {
    await db.read()
}, 0)

db.data ||= { users: [] }

await db.write()

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
        if (this.hasDb === true) throw Error('O usuário já está na database de economia.')
        return db.data.users.push({
            id: this.#userID,
            coins: 0,
            bank: 0,
            danpen: 0,
            delay: {
                work: 0,
                crime: 0,
                steal: 0,
                explore: 0,
                fish: 0,
                mine: 0,
                pay: 0
            },
            transactions: []
        })
    }

    /** 
     * remove o usuário da database
     * **/
    removeFromDb() {
        if (this.hasDb === false) throw Error('O usuário não está na database de economia.')
        let userIndex = db.data.users.findIndex(search => search.id === this.#userID)
        return db.data.users.splice(userIndex, 1)
    }
}

export async function saveAll() {
    return await db.write()
}
