let noNumero = (x) => {
    let patron = /[a-zA-Z]/gim
    if (x.match(patron)) {
        return true        
    }else{return false}
}

var n1 = document.getElementById("valor1");
var n2 = document.getElementById("valor2");

let suma = document.getElementById("btn-sumar");
let resta = document.getElementById("btn-restar");

let res = document.getElementsByClassName("resultado")[0];

suma.addEventListener("click", function () {
    let s1, s2;
    if (n1.value == '' || n2.value == '' || noNumero(n1.value) || noNumero(n2.value) ) {
        alert("por favor ingrese valores numéricos en ambos campos");        
    }else{
        s1 = parseFloat(n1.value);
        s2 = parseFloat(n2.value);
        res.innerHTML = s1 + s2;
    }
    
})
resta.addEventListener("click", function () {
    let r1, r2;
    if (n1.value == '' || n2.value == '' || noNumero(n1.value) || noNumero(n2.value) ) {
        alert("por favor ingrese valores numéricos en ambos campos");        
    }else{
        r1 = parseFloat(n1.value);
        r2 = parseFloat(n2.value);
        if (r1-r2<0) {
            res.innerHTML = '0';            
        } else {
            res.innerHTML = r1-r2;
        }
    }
    
})