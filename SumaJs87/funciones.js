function sumar(){
    try{
        var a = prompt("Valor a: ", "");

        // !a: validamos que la variable no este vacia
        // isNan(a): esta preguntando si es un numero la variable a 
        if(!a || isNaN(a)){
            throw new Error("Valor invalido de a: " + a)
        }

        var b = prompt("Valor b: ", "");
        if(!b || isNaN(b)){
            throw new Error("Valor invalido: " + b)
        }

        var c = parseInt(a) + parseInt(b);
        alert("La suma es: " + c)
    }catch(e){
        alert("El error es: " + e.message);
    }
}