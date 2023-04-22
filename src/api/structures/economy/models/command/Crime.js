import { can } from "../../functions/command/get/getUserDelay.js";
import { addUserEarnings } from "../../functions/command/post/addUserEarnings.js";
import { set } from "../../functions/command/post/setUserDelay.js";

export class Crime {
    #userID
    constructor(id) {
        this.#userID = id;
    }

    /** 
     * verifica se o usuário pode cometer um crime
     * **/
    can() {
        return can(this.#userID, "crime")
    }

    /** 
     * seta o delay de crime
     * **/
    set() {
        return set(this.#userID, "crime")
    }
}