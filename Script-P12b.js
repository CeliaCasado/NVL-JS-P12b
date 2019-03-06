	//Declaro las variables arrays que tendré
	var impares = new Array();
	var pares = new Array();
	//Defino el bucle for necesario 
	for (i = 0; i <= 50; i++){
		var aleatorios = Math.floor((Math.random() * 100) + 1);
		if (aleatorios % 2 == 0) {
			pares.push(aleatorios);
  		}else {
    		impares.push(aleatorios);
    	}
	}
	window.alert(pares);
	window.alert(impares);


	//Defino la función que saca los números aleatorios del 1 al 100 y a la vez la ejecuto
	function numerosAleatorios()
	{
		return (Math.floor((Math.random() * 100) + 1));
	}
	//Defino la función que está formada por los números pares, que recibe si es true
	function par(numsP)
	{
		return(numsP % 2 == 0)
	}
	//Defino la función que está formada por los números impares, que recive si es false
	function impar(numsI)
	{
		return (numsI % 2 != 0)
	}
	//Declaro las variables
	var aleatorios;
	var impares;
	var pares;
	//Escribo el bucle
	for (i = 0; i <= 50; i++){
		aleatorios = numerosAleatorios();
		if (par(aletorios)) {
			pares.push(aleatorios);
		}
		else {
			impares.push(aleatorios);
		}
		}
		window.alert(pares);
		window.alert(impares);



	