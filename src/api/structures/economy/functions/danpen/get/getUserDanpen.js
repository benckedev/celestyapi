/**
* função para receber quantia de danpen do usuário 
* @param {any} id - id do usuário
**/
export async function getUserDanpen(id) {
    return db.data.users.find(search => search.id === id).danpen
}

/**
* função para verificar quantia de danpen do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de danpen
**/
export async function hasUserDanpen(id, amount) {
    return (await getUserDanpen(id).danpen >= amount)
}