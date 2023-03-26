/**
* função para receber quantia de coins do usuário 
* @param {any} id - id do usuário
**/
async function getUserCoins(id) {
    // func pegar coins da db
    return 13;
}

/**
* função para verificar quantia de coins do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de coins
**/
async function hasUserCoins(id, amount) {
    // func verificar coins da db
    return true;
}

/**
* função para receber quantia de coins do banco do usuário 
* @param {any} id - id do usuário
**/
async function getUserBank(id) {
    // func pegar bank da db
    return 15;
}

/**
* função para verificar quantia de coins no banco do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de coins
**/
async function hasUserBank(id, amount) {
    // func verificar coins da db no banco
    return true;
}

/**
* função para receber quantia de coins do banco e da mão do usuário 
* @param {any} id - id do usuário
**/
async function getUserTotal(id) {
    // pegar quantia de coins mao + banco
    return 27;
}

/**
* função para verificar quantia de coins no banco e na carteira do usuário 
* @param {any} id - id do usuário
* @param {number} amount - quantia de coins
**/
async function hasUserTotal(id, amount) {
    // func verificar coins da db no banco e na mao
    return true;
}

export { getUserBank, hasUserBank, getUserCoins, hasUserCoins, getUserTotal, hasUserTotal }