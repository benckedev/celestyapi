export class ItemList {
    constructor() {
        this.list = []
    }


    /** 
     * 
     * cria e adiciona um item na lista de itens 
     * @param {number} id - id do item
     * @param {string} name - nome do item
     * @param {string} img_small - imagem pequena
     * @param {string} img_big - imagem grande
    **/
    create(options = { id: 0, name: 'Item', options: { rarity: null, img: { _small: null, _big: null } } }) {

        /* verifica se há o item na lista apartir do ID */
        if (this.list.findIndex(search => search.id === id) !== -1) throw Error('Já existe um item com esse ID.')

        this.list.push({
            id: options.id,
            name: options.name,
            ...options.options
        })

    }

    /**  
     * 
     * verifica se há um item com certo id na lista
     * @param {number} id - id do item
    **/
    has(id) {
        return (this.list.findIndex(search => search.id === id) !== -1)
    }

    /**
     * 
     * retorna item da lista
     * @param {number} id - id do item
    **/
    get(id) {
        if (!id) return this.list
        else return this.list.find(search => search.id === id)
    }



}