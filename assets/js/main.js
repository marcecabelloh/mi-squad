function miembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var melissa = new miembroSquad("Melissa", "Pacheco", "25", "dormir, comer, Matilda <3");
var paulina = new miembroSquad("Paulina", "Aros", "28", "hacer libretas, acariciar gatos, manicure");
var karla = new miembroSquad("Karla", "Jeria", "35", "comer chocolates, viajar, ir al cine");
var tanya = new miembroSquad("Tanya", "Ramirez", "2?", "gatos, viajar, tomar tecito a las 4");
var amala = new miembroSquad("Valentina Amala", "Kamala", "29", "bordar, tejer, dormir");
var paula = new miembroSquad("Paula", "Ponce", "28", "música, aves, Héroes of the storm");
var mariela = new miembroSquad("Mariela", "Cubillos", "36", "tejer, comer chocolates, cocinar");
var marcela = new miembroSquad("Marcela", "Cabello", "31", "cantar, yoga, cocinar");

var array = [];

array.push(melissa);
array.push(paulina);
array.push(karla);
array.push(tanya);
array.push(amala);
array.push(paula);
array.push(mariela);
array.push(marcela);


