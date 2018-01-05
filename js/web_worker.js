
//Definimos el evento "message" para el worker
//En este evento introducimos la funcion de suma en forma de bucle.
self.addEventListener('message', function(e) {

	//Variable donde almacenamos el total de la suma.
  	var total = 0;

  	//Obtenemos el valor introducido en el input "value" de la página principal.
  	var num = e.data;

  	console.log("[WORKER] Valor introducido por el usuario: ", num);

  	for(var i=0; i<num; i++){
  		total = total + i;  		
  	}

  	//Enviamos el total de la suma a la página principal.
	self.postMessage(total);

	console.log("[WORKER] Finalizamos el proceso. El total es: ", total);

}, false);

