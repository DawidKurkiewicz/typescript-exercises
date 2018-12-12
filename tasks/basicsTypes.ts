let zrobione: boolean = true
let liczba: number = 123


enum Systemy { Windows, Linux, MacOS }

let mojSystem: Systemy = Systemy.MacOS


type psikus = number | 'psikus'

function foo(p1: string, p2: number = 2, p3?: boolean) {
    if (p2 !== 2) {
        return 'kaktus'

    }
    return 1
}
console.log(foo('cos', 3))

interface NaszTyp {
    nazwa: string;
    wiek: number;
    dodatkowe?: string;
}

interface Animal {
    nazwa: string;
    wiek: number;
    liczba?: string;
}

type Hybrid = NaszTyp & Animal


function wypiszWartosci(param: Hybrid): void {
    console.log(param.nazwa)
    console.log(param.wiek)
    console.log(param.dodatkowe)
}

let testowyObiekt = { nazwa: "testowy", wiek: 1 }
wypiszWartosci(testowyObiekt)