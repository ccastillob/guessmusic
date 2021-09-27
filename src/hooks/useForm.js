
import { useState } from 'react';

/* Exportamos este hook que nos servira para los formularios
 Devuelve 3 valores:
 * values: un objeto con los valores que se pasarán
 * handleInputChange: es una función que se le pasará al onChange para poder hacer los cambios a un input
 * reset: es una función que colocará los valores inicias, es decir en blanco o vacios
*/
export const useForm = ( initialState = {} ) => {

	const [values, setValues] = useState(initialState);

	const reset = () => {
		setValues( initialState );
	}

	const handleInputChange = ({ target }) => {

		setValues({
			...values,
			[ target.name ]: target.value
		});

	}

	return [ values, handleInputChange, reset ];

}
