/**
* função para remover coins do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserCoins(id, amount) {
    // func add coins da db
    return amount;
}

/**
* função para remover coins no banco do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserBank(id, amount) {
    // func add bank da db
    return amount;
}

/**
* função para remover coins no banco e na mao do usuário
* @param {any} id - id do usuário
* @param {number} amount - quantia para remover
**/
async function removeUserAny(id, amount) {
    // func remover tanto coins qnt bank
    return amount
}

export { removeUserCoins, removeUserBank, removeUserAny }