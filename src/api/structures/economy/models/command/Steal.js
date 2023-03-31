import { can } from "../../functions/command/get/getUserDelay.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Steal {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode roubar
     * **/
    can() {
        return can(this.#userID, "steal")
    }

    /** 
     * seta o delay de roubo
     * **/
    set() {
        return set(this.#userID, "steal")
    }
}