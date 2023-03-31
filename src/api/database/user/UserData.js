import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// registro da database
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'file/user_data.json')

const adapter = new JSONFile(file)
export const db = new Low(adapter)


/** 
 * inicia a database de economia
 * **/
export async function initUserData() {
    await db.read()
    db.data ||= { users: [] }
}

// 

export class UserData {
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
        db.data.users.push({
            id: this.#userID,
            blacklist: false,
            permissions: {
                _GUEST: true,
                _VIP: false,
                _STAFF: false,
                _DEV: false
            }
        })
    }

    /** 
     * remove o usuário da database
     * **/
    removeFromDb() {
        if (this.hasDb === false) throw Error('O usuário não está na database.')
        let userIndex = db.data.users.findIndex(search => search.id === this.#userID)
        db.data.users.splice(userIndex, 1)
    }
}

export async function saveUserData() {
    await db.write()
}
