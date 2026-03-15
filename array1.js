let arreo = document.getElementById("formas1");

let mA = [];

    arreo.addEventListener('submit',function(event){
        event.preventDefault();
         let forData = new FormData(arreo)
         let d1 = forData.get("dato1")

         mA.push(d1)
         //mA[0]=d1

         console.log("Los datos son: "+mA)
         
    })

let arreo2 = document.getElementById("formas2");
    arreo2.addEventListener('submit',function(event){
        event.preventDefault();
        let foDat = new FormData(arreo2)
        let d2 = foDat.get("dato2")

        if (mA.includes(d2)){
            console.log("El dato: '"+d2+"' si se encuentra dentro del arreglo")
        }else
            console:log("El dato no esta en el arreglo")
    })