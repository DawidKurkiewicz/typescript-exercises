let zrobione = true;
let liczba = 123;
var Systemy;
(function (Systemy) {
    Systemy[Systemy["Windows"] = 0] = "Windows";
    Systemy[Systemy["Linux"] = 1] = "Linux";
    Systemy[Systemy["MacOS"] = 2] = "MacOS";
})(Systemy || (Systemy = {}));
let mojSystem = Systemy.MacOS;
function foo(p1, p2 = 2, p3) {
    if (p2 !== 2) {
        return 'kaktus';
    }
    return 1;
}
console.log(foo('cos', 3));
function wypiszWartosci(param) {
    console.log(param.nazwa);
    console.log(param.wiek);
    console.log(param.dodatkowe);
}
let testowyObiekt = { nazwa: "testowy", wiek: 1 };
wypiszWartosci(testowyObiekt);
//# sourceMappingURL=basicsTypes.js.map