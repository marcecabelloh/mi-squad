 var array = [];//arreglo vacío para guardar cada uno de los miembros de mi squad

//ffunción constructora 
function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.photos = new Image();
	this.photos.src="fotos/" + this.nombre + ".jpg";// intenté sin éxito subir fotos de perfil

}

//se debía crear una clase llamada comentario
function Comentario(id_miembro, comentario, likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.likes = likes;
}

// función que permite crear div en html y luego crear otro elemento en este caso un textarea, 
//el cual llamo al final concatenando todos los datos que quiero imprimir

function llenarDiv(idDiv, caja){
	var div = document.getElementById(idDiv);
	var opAux;
	caja.forEach(function(elemento){
		opAux = document.createElement("textarea");
		opAux.innerHTML =  elemento.nombre;
		div.appendChild(opAux);
	}); 
}

//función que me permite crear otro div vacío y así introducir un botón para los likes
function contadorLike(idLike, Like){
	var  puntos = document.getElementById(idLike);
	var opAux;
	like.forEach(function(elemento){
		opAux = document.createElement("button");
		opAux.innerHTML =  elemento.nombre;
		puntos.appendChild(opAux);
	}); 
}


function listaSquad(){

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




//muestra los datos de los miembros del squad en un div en el html y el cuadro de comentarios su botón y el botón de likes con forma de corazón.
var squad = array.forEach(function(elementos){
	document.getElementById("lista").innerHTML += elementos.photos="fotos/" + "<b>Nombre: </b>" + elementos.nombre + " " + elementos.apellido + "<br><b>Edad: </b>" + elementos.edad + "<br><b>Hobbies:</b>" + "<ul><li>" + elementos.hobbies[0] + "</li><li>" + elementos.hobbies[1] 
	+ "</li><li>" + elementos.hobbies[2] + "</li></ul>" + "<textarea name='comment' id='comment' placeholder='escriba aquí'></textarea>" + "<br>" + "<input type='submit' value='Dejar comentario'/>"
	+ "<input name= 'boton1' type='image'src= 'botoncorazon.jpg' width='50' height='40'>" + "<br><br>";

});

}

listaSquad();

//falta imprimir comentarios de usuarios y el conteo de likes.