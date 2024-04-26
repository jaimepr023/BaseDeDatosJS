/**
 * 
 */

const BDD = [["Pedro", 8], ["Juan", 5], ["Manuel", 10], ["Alberto", 4], ["Igor", 2],];
var BDDMOD = [];
const ruta = document.getElementById("BDD");

//Se escribe completo por pantalla
var resultado = "";
for (let i = 0; i < BDD.length; i++) {
	resultado += BDD[i] + "<br>";
}
ruta.innerHTML = resultado;

//Los escribe todos
function todos() {
	resultado = "";
	BDDMOD = [];
	for (let i = 0; i < BDD.length; i++) {
		resultado += BDD[i] + "<br>";
		BDDMOD.push(BDD[i]);
	}
	ruta.innerHTML = resultado;
}

//Solo para ver los suspensos
function suspensos() {
	resultado = "";
	BDDMOD = [];
	ruta.innerHTML = "";
	for (let i = 0; i < BDD.length; i++) {
		if (BDD[i][1] <= 4) {
			resultado += BDD[i] + "<br>";
			BDDMOD.push(BDD[i]);
		}
	}
	ruta.innerHTML = resultado;
}

//Solo para ver los aprobados
function aprobados() {
	resultado = "";
	BDDMOD = [];
	ruta.innerHTML = "";
	for (let i = 0; i < BDD.length; i++) {
		if (BDD[i][1] >= 5) {
			resultado += BDD[i] + "<br>";
			BDDMOD.push(BDD[i]);
		}
	}
	ruta.innerHTML = resultado;

}

//Se ordena por notas
function porNota() {
	resultado = "";
	for (let i = 0; i < BDDMOD.length - 1; i++) {
		for (let j = 0; j < BDDMOD.length - 1 - i; j++) {
			if (BDDMOD[j][1] > BDDMOD[j + 1][1]) {
				let aux = BDDMOD[j];
				BDDMOD[j] = BDDMOD[j + 1];
				BDDMOD[j + 1] = aux;
			}
		}
	}
	for (let i = 0; i < BDDMOD.length; i++) {
		resultado += BDDMOD[i] + "<br>";
	}
	ruta.innerHTML = resultado;
	//Con el sort
	/*BDD.sort(a, b)
		{
			if (a[posicion] > b[posicion]) {
				return 1;
			} else {
				return -1;
			}
		
		}*/
}


//Se ordena por nombre
function porNombre() {
	resultado = "";
	for (let i = 0; i < BDDMOD.length - 1; i++) {
		for (let j = 0; j < BDDMOD.length - 1 - i; j++) {
			if (BDDMOD[j][0] > BDDMOD[j + 1][0]) {
				let aux = BDDMOD[j];
				BDDMOD[j] = BDDMOD[j + 1];
				BDDMOD[j + 1] = aux;
			}
		}
	}
	for (let i = 0; i < BDDMOD.length; i++) {
		resultado += BDDMOD[i] + "<br>";
	}
	ruta.innerHTML = resultado;

}
