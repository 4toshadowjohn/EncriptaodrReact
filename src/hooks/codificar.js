
function esCaracterNumerico(caracter) {
    return /\d/.test(caracter)
}


export function encryptar (val) {
    
    let res = []
        for(let caracter of val)
        {
            const carac = esCaracterNumerico(caracter)
            if (carac == true) {
                    let numeber = Number(caracter)
                    let rest = numeber + 2
                    if (rest == 10) {
                        rest = 0
                        let des = String(rest)
                        res.push(des)
                    } else if (rest == 11) {
                        rest = 1
                        let des = String(rest)
                        res.push(des)
                    } else {
                        let des = String(rest)
                        res.push(des)
                    }
            } else {
                const letra = caracter.charCodeAt(0)
                let aculetra = letra + 1
                const letraAsc = String.fromCharCode(aculetra)
                res.push(letraAsc)
                    }

        }
        return (res.join(''))      
}


