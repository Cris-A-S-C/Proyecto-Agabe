let Am3 = [];
let Am4 = [];
let am5 = [];
let am6 = [];

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
function menorizado(){
    let menor = Am3[0]

    for(let i = 0; i < Am3.length; i++){
        if (Am3[i] < menor){
            menor = Am3[i]
    }
}
    alert("El numero mayor entre todos es: "+menor)
}

function suma(){
    let sumar=0

    for(let i = 0; i < Am3.length; i++){
        //suma=suma+Am3[i]
        sumar+=Am3[i]
    }
    alert("La suma de los numeros es: "+sumar)
}

function adicion(){
    let n4 = parseFloat(document.getElementById("num4").value);
    
    Am4.push(n4)

    alert("El arreglo esta formado por ["+Am4+"]");
}

function sumarr(){
    for (let i = 0; i < Am3.length; i++){
        am6[i]=Am3[i]+Am4[i]
    }
    alert("La suma de los arreglos es: ["+am6+"]");
}

function unarr(){
    let mayor = Am3[0]
    let menor = Am4[0]

    for(let i = 0; i < Am3.length; i++){
       if (Am3[i] > mayor){
            mayor = Am3[i]
        }
    }
    for(let j = 0; j< Am4.length; j++){
        if (Am4[j] < menor){
            menor = Am4[j]
        }
    }
    am5[0]=mayor
    am5[1]=menor

    alert("El primer arreglo es: [ "+Am3+" ]"
        +"\nEl segundo arreglo es: [ "+Am4+" ]"
        +"\nLos numeros del tercer arreglo son: [ "+am5+" ]"
        +"\nEl número mayor del primer arreglo es: "+am5[0]
        +"\nEl número menor del segundo arreglo es: "+am5[1])
}