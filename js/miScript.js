function orden(){
            let cant = document.getElementById("canti");
            let nom = document.getElementById("nombe");
            let caf = document.querySelector('input[name="caf"]:checked');
            let exprice = 0;

            const extra =document.querySelectorAll('input[name="extra"]:checked');
                extra.forEach(extra=>{exprice+= parseFloat(extra.value)});
            let price = parseFloat(caf.value)*parseFloat(cant.value);
            let xprice = exprice*cant.value;
            let tprice = price+xprice;

            alert('Datos de Orden: '+"\nNombre: "+nom.value+"\nCantidad: "+cant.value+
            "\nPrecio sin extras: "+price+"\nPrecio de los extras: "+xprice+"\nPrecio total: "+tprice);
        }



 let BotonDos = document.getElementById("botonDos");
 BotonDos.addEventListener('click',function(event){
    event.preventDefault();
    alert("Oprimiste el boton dos....")
 })