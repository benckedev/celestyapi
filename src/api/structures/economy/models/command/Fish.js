import { can } from "../../functions/command/get/getUserDelay.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Fish {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode pescar
     * **/
    can() {
        return can(this.#userID, "fish")
    }

    /** 
     * seta o delay de roubo
     * **/
    set() {
        return set(this.#userID, "fish")
    }
}