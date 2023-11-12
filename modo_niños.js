

// EJERCICIO CONDUCTOR:

let age= Number(prompt("Cuantos años tiene: "));
let licencia= Boolean(confirm("Dispone de licencia profesional: "));
if( age>=25 && licencia==true) {
    alert("Apto");
}
else{
    alert("No apto");
}
//EJERCICIO APODO 

let apodo= String(prompt("Introdce tu apodo: "));
let resultado=apodo || 'anonymus';
alert(resultado);
console.log(resultado);

// EJERCICIO BECAS SUDAMERICANO

let promedio= Number(prompt("Cual es el promedio del estudiante: "));
let ingresos= Number(prompt("Cuato es el ingreso total de su familia: "));
if (promedio>=8.5 && ingresos<600){
    alert("Aprobado");
}
alert("Desaprobado");

//VIDAS DE JUEGO DE ROMPECABEZAS USANDO WHILE

let vidas=0;
let niveles=5;
while(vidas<5){
    alert(vidas);
    vidas++;
};

//MAQUINA DE HACER BISAGRAS INTERACTIVA USANDO DO WHILE

let medidas= String(prompt("Cual es la medida de la bisagra que necesita: "));
let Cantidad= Number(prompt("Cuantas bisagras necesita: "));
let bisagra=0;
alert("Usted necesita "+ Cantidad + " bisagras de las siguientes medidas: "+ medidas);
do{
    alert(bisagra);
    bisagra++
} while(bisagra<=Cantidad);
alert("Se realizo un total de: "+ Cantidad+ " bisagras y estan listas para la entrega, puede pasarlas retirando.");

// MODO INFANTIL USANDO FOR
let niños= String(confirm("Desea activar su telefono a modo -infantil-"));
alert("Usted acaba de activar el modo infantil y el infante tiene que contar hasta 20 para poder usar el dispositivo");
let tiempo=0
for(tiempo=0; tiempo<=20; tiempo++) {
    alert(tiempo);
} 
alert("Listo para usarse el dispositivo");