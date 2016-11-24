var dbJornalero = localStorage.getItem("dbJornalero"); //Obtener datos de localStorage

dbJornalero = JSON.parse(dbJornalero); // Covertir a objeto

if (dbJornalero === null){ // Si no existe, creamos un array vacio.
	dbJornalero = [];
}

jQuery(document).ready(function($) {
	
	$("#btnGuardar").on("click", function(){

		agregarJornalero();

	});

	console.log(dbJornalero);
	listar();

});

function listar() {

	$("#tblJornaleros tbody").empty();
	
	$.each(dbJornalero, function(index, val) {

		var jornalero = JSON.parse(val);

		var columnaID = '<td>' + index + '</td>';
		var columnaNombre = '<td>' + jornalero.Nombre + '</td>';
		var columnaCorreo = '<td>' + jornalero.Correo + '</td>';
		var columnaFechaNacimiento = '<td>' + jornalero.FechaNacimiento + '</td>';
		var columnaPeso = '<td>' + jornalero.Peso + '</td>';7
		var columnaBotonEditar = '<td><button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-pencil"></i></button></td>';
		var columnaBotonEliminar = '<td><button type="button" class="btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td>';

		var columnas = columnaID + columnaNombre + columnaCorreo + columnaFechaNacimiento + columnaPeso + columnaBotonEditar + columnaBotonEliminar;

		var fila = '<tr>' + columnas + '</tr>';

		$("#tblJornaleros tbody").append(fila);
	});

}


function limpiar() {
	$('#txtNombre').val("");
	$('#txtCorreo').val("");
	$('#txtFechaNacimiento').val("");
	$('#txtPeso').val("");
}

function agregarJornalero() {
	
	//var peso = document.getElementById('txtPeso').value;
	var nombre = $('#txtNombre').val();
	var correo = $('#txtCorreo').val();
	var fechaNacimiento = $('#txtFechaNacimiento').val();
	var peso = $('#txtPeso').val();

	var datos_jornalero = JSON.stringify({
		Nombre : nombre,
		Correo : correo,
		FechaNacimiento : fechaNacimiento,
		Peso : peso
	});

	dbJornalero.push(datos_jornalero);
	localStorage.setItem("dbJornalero", JSON.stringify(dbJornalero));

	limpiar();

	console.log(dbJornalero);

	console.log(datos_jornalero);

	console.log(nombre);
	console.log(correo);
	console.log(fechaNacimiento);
	console.log(peso);
}