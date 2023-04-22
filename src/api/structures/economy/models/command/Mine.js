import { can } from "../../functions/command/get/getUserDelay.js";
import { addUserEarnings } from "../../functions/command/post/addUserEarnings.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Mine {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode minerar
     * **/
    can() {
        return can(this.#userID, "mine")
    }

    /** 
     * seta o delay de minercao
     * **/
    set() {
        return set(this.#userID, "mine")
    }

}