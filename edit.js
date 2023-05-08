function add(first, second) {
	let resultado = 0;
	resultado = first + second;
	return resultado;

}

function sub(first, second) {
	let resultado = 0;
	resultado = first - second;
	return resultado;
}

function mul(first, second) {
	let resultado = 0;
	resultado = first * second;
	return resultado;
}

function div(first, second) {
	let resultado = 0;
	resultado = first / second;
	return resultado;
}

function is_even(number) {
	let resultado = true;
	if ((number % 2) === 1) {
		resultado = false;
	}
	return resultado;
}

