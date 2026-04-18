let objetosX=[]
let A=[]
let B=[]
let C=[]

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
    let turno=0

    let obj={
        "nombre": nom.value,
        "matri": mat.value,
        "escuela": 'INGENIERÍA',
        "edad": ed.value,
    }
    if (turno==0){
        A.push(obj)
        turno=1
    }
    else{
        B.push(obj)
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
    let t1=1
    let t2=0
    let t3=0

    let obj={
        "nombre": nom.value,
        "matri": mat.value,
        "escuela": 'INGENIERÍA',
        "edad": ed.value,
    }
    if(t1==1&&t2==0&&t3==0){
        A.push(obj)
        t1=0
        t2=1
        t3=0
    }
    else if(t1==0&&t2==1&&t3==0){
        B.push(obj)
        t1=0
        t2=0
        t3=1
    }
    else if(t1==0&&t2==0&&t3==1){
        A.push(obj)
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