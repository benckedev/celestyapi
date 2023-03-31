import { can } from "../../functions/command/get/getUserDelay.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Explore {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode explorar
     * **/
    can() {
        return can(this.#userID, "explore")
    }

    /** 
     * seta o delay de exploracao
     * **/
    set() {
        return set(this.#userID, "explore")
    }
}