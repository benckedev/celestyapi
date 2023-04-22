import { can } from "../../functions/command/get/getUserDelay.js";
import { addUserEarnings } from "../../functions/command/post/addUserEarnings.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Work {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode trabalhar
     * **/
    can() {
        return can(this.#userID, "work")
    }

    /** 
     * seta o delay de trabalho
     * **/
    set() {
        return set(this.#userID, "work")
    }
}