//ffunción constructora 
function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies

}

function listaSquad(){

var array = [];//arreglo vacío para guardar cada uno de los miembros de mi squad

//instancia para cada integrante del squad
var melissa = new MiembroSquad("Melissa", "Pacheco", 25, ["dormir", "comer", "Matilda <3"]);
var paulina = new MiembroSquad("Paulina", "Aros", 28, ["hacer libretas", "acariciar gatos", "manicure"]);
var karla = new MiembroSquad("Karla", "Jeria", 35, ["comer chocolates", "viajar", "ir al cine"]);
var tanya = new MiembroSquad("Tanya", "Ramirez", 29, ["gatos", "viajar", "tomar tecito a las 4"]);
var amala = new MiembroSquad("Valentina Amala", "Kamala", 29, ["bordar", "tejer", "dormir"]);
var paula = new MiembroSquad("Paula", "Ponce", 28, ["música", "aves", "Héroes of the storm"]);
var mariela = new MiembroSquad("Mariela", "Cubillos", 36, ["tejer", "comer chocolates", "cocinar"]);
var marcela = new MiembroSquad("Marcela","Cabello", 31, ["cantar", "yoga", "cocinar"]);

//push para introducir los datos a mi array vacío
array.push(melissa);
array.push(paulina);
array.push(karla);
array.push(tanya);
array.push(amala);
array.push(paula);
array.push(mariela);
array.push(marcela);

//muestra los datos de los miembros del squad en un div en el html 
var squad = array.forEach(function(elementos){
    document.getElementById("lista").innerHTML += "<b>Nombre: </b>" + elementos.nombre + " " + elementos.apellido + "<br><b>Edad: </b>" + elementos.edad + "<br><b>Hobbies:</b>" + "<ul><li>" + elementos.hobbies[0] + "</li><li>" + elementos.hobbies[1] + "</li><li>" + elementos.hobbies[2] + "</li></ul>";
});

}

listaSquad();



