let Am3 = [];
let Am4 = [];

function agregado(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    Am3.push(n1)
    Am3.push(n2)
    Am3.push(n3)

    alert("El arreglo esta formado por ["+Am3+"]");
}

function extradicion() {
    let nx = parseFloat(document.getElementById("numX").value);

    Am3.push(nx)

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

function suma(){
    let sumar=0

    for(let i = 0; i < Am3.length; i++){
        sumar+=Am3[i]
    }
    alert("La suma de los numeros es: "+sumar)
}

function adicion(){
    let n4 = parseFloat(document.getElementById("num4").value);
    
    Am4.push(n4)

    alert("El arreglo esta formado por ["+Am4+"]");
}

function unarr(){
    let am5=[];

    for(let i = 0; i < Am3.length; i++){
        am5[i]=Am3[i]+Am4[i]
    }
    alert("La suma de los numeros de los arreglos es: ["+am5+"]")
}