function mostrarMensaje()
{
	// El nombre de usuario lo encontramoss en el atributo "value" del 
	// elemento con el id "usuario"
	
	var usuario = document.getElementById("usuario").value;
	
	// Validamos primero el campo, no queremos un campo vacío
	// pero tampoco queremos exagerar con expresiones regulares
	// ahora, desconozco la existencia de alguna funcion

	if(usuario === "" || usuario === null)
	{
		alert("Por favor ingresa un nombre de usuario")
		return;
	}

	// Todo bien hasta aquí, preparamos el mensaje antes de enviarlo

	var mensaje = usuario + ", " + "te has registrado correctamente";

	alert(mensaje);
}
