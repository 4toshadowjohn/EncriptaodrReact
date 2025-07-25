export function desemcriptar (val)  {
    let valdes = document.getElementById('resul')
    let res = []
        for(let caracter of val)
        {
            const carac = esCaracterNumerico(caracter)
            if (carac == true) {
                    let numeber = Number(caracter)
                    let rest = numeber - 2
                    if (rest == -1) {
                        rest = 9
                        let des = String(rest)
                        res.push(des)
                    } else if (rest == -2) {
                        rest = 8
                        let des = String(rest)
                        res.push(des)
                    } else {
                        let des = String(rest)
                        res.push(des)
                    }
            } else {
                const letra = caracter.charCodeAt(0)
                let aculetra = letra - 1
                const letraAsc = String.fromCharCode(aculetra)
                res.push(letraAsc)
                    }

        }
        return (valdes.value = res.join(''))      
}



function esCaracterNumerico(caracter) {
    return /\d/.test(caracter)
}