
// Creamos una constante que almacenará el ENDPOINT base de nuestra api
const baseURL = process.env.REACT_APP_API_URL;

// Creamos una función que nos retorne una promesa de un fetch donde no necesitaremos el token
const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

	// Creamos una URL con la base y el endpoint que pasaremos por parametro
	const url = `${baseURL}/${endpoint}`;

	// Validamos si el metodo es GET
	if( method === 'GET' ) {
		return fetch( url );
	}else {
		return fetch( url, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( data ),
		});
	}

}

// Creamos una función que nos retorne una promesa de un fetch donde necesitaremos un token
const fetchConToken = ( endpoint, data, method = 'GET' ) => {

	// Creamos una URL con la base y el endpoint que pasaremos por parametro
	const url = `${baseURL}/${endpoint}`;

	// Almacenamos el token si es que existe en una constante
	const token = localStorage.getItem('token') || '';

	// Validamos si el metodo es GET
	if( method === 'GET' ) {

		return fetch( url, {
			headers: {
				'x-token': token,
			}
		});

	}else {

		return fetch( url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'x-token': token,
			},
			body: JSON.stringify( data ),
		});

	}

}

// Exportamos ambas funciones
export {
	fetchSinToken,
	fetchConToken,
}