export default function format(options = { n: Number, pt_br: Boolean }) {
    let loc = 'en-US'
    if (options.pt_br === true) loc = 'pt-BR'

    if (options.n >= 1e3 && options.n < 1e6) return +(options.n / 1e3).toFixed(1) + "k";
    else if (options.n >= 1e6 && options.n < 1e9) return +(options.n / 1e6).toFixed(1) + "M";
    else if (options.n >= 1e9 && options.n < 1e12) return +(options.n / 1e9).toFixed(1) + "B";
    else if (options.n >= 1e12 && options.n < 1e15) return +(options.n / 1e12).toFixed(1) + "T";
    else if (options.n >= 1e15 && options.n < 1e18) return +(options.n / 1e15).toFixed(1) + "q";
    else if (options.n >= 1e18 && options.n < 1e21) return +(options.n / 1e18).toFixed(1) + "Q";
    else if (options.n >= 1e21 && options.n < 1e24) return +(options.n / 1e21).toFixed(1) + "S";
    else if (options.n >= 1e24 && options.n < 1e27) return +(options.n / 1e24).toFixed(1) + "SS";
    else if (options.n >= 1e27 && options.n < 1e30) return +(options.n / 1e30).toFixed(1) + "O";
    else return options.n.toLocaleString(loc)
}