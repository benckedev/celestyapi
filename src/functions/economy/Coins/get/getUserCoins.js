/**
* função para receber quantia de coins do usuário 
* @param {any} id - id do usuário
**/
async function getUserCoins(id) {
    // func pegar coins da db
    return 13;
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
* função para receber quantia de coins do banco e da mão do usuário 
* @param {any} id - id do usuário
**/
async function getUserTotal(id) {
    // pegar quantia de coins mao + banco
    return 27;
}

export { getUserBank, getUserCoins, getUserTotal }