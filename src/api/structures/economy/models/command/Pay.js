import { can } from "../../functions/command/get/getUserDelay.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Pay {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode enviar coins
     * **/
    can() {
        return can(this.#userID, "pay")
    }

    /** 
     * seta o delay de transferencia de coins
     * **/
    set() {
        return set(this.#userID, "pay")
    }
}