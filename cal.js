function resolver(){
     let n1 = parseFloat(document.getElementById("num1").value);
     let n2 = parseFloat(document.getElementById("num2").value);
     let ope = document.querySelector('input[name="op"]:checked')

    if(ope.value=='suma'){
        result = n1+n2;
    }
    else{if(ope.value=='resta'){
        result = n1-n2;
    }
    else{if(ope.value=='multi'){
        result = n1*n2;
    }
    else(ope.value=='divi')
         if(n2==0){
            alert("No se puede realizar esta operación");
         }
        else
         result = n1/n2;
    }
    }
    alert("El resultado es: "+ result);
}
