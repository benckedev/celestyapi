export default class Ore {
    constructor(options = { type: OreType, amount: Number }) {

        if ((typeof options.amount) != "number") throw Error("The type of amount aren't a Number.")
        else if (options.amount <= 0) throw Error("The amount of ore cannot be less than 1.")


        options.type.amount = options.amount
        this.ore = options.type
    }


    info() {
        return this.ore
    }



}