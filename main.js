
alert("Abrir por favor la consola o presiona F12")

if(true){
    let num1 = Number(prompt("Ingrese el numero 1"));
    let num2 = Number(prompt("Ingrese el numero 2"));
    console.log(num1+num2);
    console.log("Condicion Correcta");
}else{
    console.error("Condicion Incorrecta :(");
}

// ------------------------------------------------

if(num>=5 && num<=10){
    alert(`Usuario el numero ${num} ingresado es el correcto`);
}else{
    console.error(`Usuario el numero ${num} ingresado es el incorrecto`);
}

// ------------------------------------------------

let num = number(prompt("Usuario ingrese un numero entres 5 - 10"));

if(num<=5){
    if(num>=10){
        console.log(`Usuario el numero ${num} ingresado es el correcto`);
    }else{
        console.error(`Usuario el numero ${num} ingresado es el incorrecto`)
    }
}else{
    console.error(`Usuario el numero ${num} ingresado es el incorrecto`)
}

   