let objetosX=[]

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