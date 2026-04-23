let objetosX=[]
let A=[]
let B=[]
let C=[]
let turno=0
let t1=1
let t2=0
let t3=0
let Jove=[]
let Adu=[]
let TM202=[]
let TV202=[]

function almacen(){
    let nom = document.getElementById("nombre")
    let mat = document.getElementById("matri")
    let ed = document.getElementById("edad")

    let obj={
        "nombre": nom.value,
        "matri": mat.value,
        "escuela": 'INGENIERÍA',
        "edad": ed.value,
    }

    objetosX.push(obj)
    console.log(objetosX)
}

function mostrarT(){
    let tabla = document.getElementById("tabla1")
    tabla.innerHTML=''

    objetosX.forEach(element => {
        let fila=`
                    <tr>
                    <td>${element.nombre}</td><td>${element.matri}</td><td>${element.edad}</td>
                    </tr>
                    `
    tabla.innerHTML +=fila
    
    });
}

function maymay(){
    let mayor = objetosX[0].edad
    for(let i = 0; i < objetosX.length; i++){
        if (objetosX[i].edad> mayor){
            mayor = objetosX[i].edad
    }
}
   console.log("La mayor edad es: "+mayor)
}

function array2(){
    let nom = document.getElementById("nombre")
    let mat = document.getElementById("matri")
    let ed = document.getElementById("edad")

    let obj = {
        "nombre": nom.value,
        "matri": mat.value,
        "escuela": 'INGENIERÍA',
        "edad": ed.value,
    }
    if (turno==0){
        A.push(obj)
        console.log(A)
        turno=1
    }
    else{
        B.push(obj)
        console.log(B)
        turno=0
    }
}
function mostrarA(){
    console.log(A)
    console.log(B)
}

function array3(){
    let nom = document.getElementById("nombre")
    let mat = document.getElementById("matri")
    let ed = document.getElementById("edad")

    let obj = {
        "nombre": nom.value,
        "matri": mat.value,
        "escuela": 'INGENIERÍA',
        "edad": ed.value,
    }
    if(t1==1&&t2==0&&t3==0){
        A.push(obj)
        console.log(A)
        t1=0
        t2=1
        t3=0
    }
    else if(t1==0&&t2==1&&t3==0){
        B.push(obj)
        console.log(B)
        t1=0
        t2=0
        t3=1
    }
    else if(t1==0&&t2==0&&t3==1){
        A.push(obj)
        console.log(C)
        t1=0
        t2=0
        t3=1
    }
}
function mostrarA2(){
    console.log(A)
    console.log(B)
    console.log(C)
}

function insert(){
    let nom = document.getElementById("nombre")
    let gpo = document.getElementById("gpo")
    let ed = document.getElementById("edad2")
    let turn = document.getElementById("turno")

    let obj = {
        "nombre": nom.value,
        "grupo": gpo.value,
        "edad": ed.value,
        "turno": turn.value,
    }

    if (obj.turno=='TM'){
        TM202.push(obj)
        console.log(TM202)
    }
    else if (obj.turno=='TV'){
        TV202.push(obj)
        console.log(TV202)
    }
}
function edades(){
    let nom = document.getElementById("nombre")
    let gpo = document.getElementById("gpo")
    let ed = document.getElementById("edad2")
    let turn = document.getElementById("turno")

    let obj = {
        "nombre": nom.value,
        "grupo": gpo.value,
        "edad": ed.value,
        "turno": turn.value,
    }

    if (obj.edad>=20&&obj.edad<=30){
        Jove.push(obj)
        console.log(Jove)
    }
    else if(obj.edad>30){
        Adu.push(obj)
        console.log(Adu)
    }
}
function turnos(){
    let nom = document.getElementById("nombre")
    let gpo = document.getElementById("gpo")
    let ed = document.getElementById("edad2")
    let turn = document.getElementById("turno")

    let obj = {
        "nombre": nom.value,
        "grupo": gpo.value,
        "edad": ed.value,
        "turno": turn.value,
    }

    if (obj.grupo==202&&obj.turno=='TV'&&obj.edad>=20&&obj.edad<=30){
        TV202.push(obj)
        console.log(TV202)
    }
    else if (obj.grupo==202&&obj.turno=='TM'&&obj.edad>=31&&obj.edad<=40){
        TM202.push(obj)
        console.log(TM202)
    }
}
function trees(){
    let nom = document.getElementById("nombre")
    let gpo = document.getElementById("gpo")
    let ed = document.getElementById("edad2")
    let turn = document.getElementById("turno")

    let obj = {
        "nombre": nom.value,
        "grupo": gpo.value,
        "edad": ed.value,
        "turno": turn.value,
    }

    if (obj.turno=='TM'){
        A.push(obj)
        console.log(A)
    }
    else if (obj.turno=='TV'){
        B.push(obj)
        console.log(B)
    }
    else if (obj.edad>40){
        C.push(obj)
        console.log(C)
    }
}
function mostrar3(){
    console.log("Los primeros arreglos:")
    console.log(TM202)
    console.log(TV202)
    console.log("Los segundos arreglos:")
    console.log(Jove)
    console.log(Adu)
    console.log("Los terceros arreglos:")
    console.log(A)
    console.log(B)
    console.log(C)
}