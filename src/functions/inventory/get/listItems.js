/**
*  retorna todos os itens do inventário
*  @param {any} id - id do usuário
*   
**/
export async function getItemList(id) {
    // codigo retorna itens do inventario
    return [];
}

/**
*  retorna certo item do inventário
*  @param {any} id - id do usuário
*  @param {number} id - id do item
*   
**/
export async function getItem(id, item_id) {
    // codigo retorna item do inventario
    return {};
}

/**
*  verifica se há item no inventário com/sem quantia
*  @param {any} id - id do usuário
*  @param {number} item_id - id do item
*  @param {number} amount - quantidade do item
*   
**/
export async function hasItem(id, item_id, amount = 1) {
    // codigo verifica se há item no inventário com certa quantia
    return true;
}