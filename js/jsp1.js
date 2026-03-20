let Am3 = [];

function agregado(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    Am3.push(n1)
    Am3.push(n2)
    Am3.push(n3)

    alert("El arreglo esta formado por ["+Am3+"]");
}

function mayorizado(){
    let mayor = Am3[0]

    for(let i = 0; i < Am3.length; i++){
        if (Am3[i] > mayor){
            mayor = Am3[i]
    }
}
    alert("El numero mayor entre todos es: "+mayor)
}