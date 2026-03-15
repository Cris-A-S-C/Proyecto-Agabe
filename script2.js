    let Formulario = document.getElementById("form1");

    Formulario.addEventListener('submit',function(event){
        event.preventDefault();
         let forData = new FormData(Formulario);
         let d1 = forData.get("dato1");
         let d2 = forData.get("dato2");
         let d3 = forData.get("dato3");
     let suma = parseFloat(d1)+parseFloat(d2)+parseFloat(d3);
    console.log("dato 1:"+d1+" dato 2:"+d2+" dato 3:"+d3);
        console.log("La suma de: "+d1+"+"+d2+"+"+d3+" es: "+suma);

    if(suma>10)
            console.log("La suma fue mayor que 10");
    else
            console.log("La suma fue menor que 10");
    })
