
// Importamos la función que no pide token
import { fetchConToken } from "../fetch"

// Exportamos y creamos una función que retornará la data de los usuarios como promesa
export const getCategorieUser = async(id) => {

	// Hacemos la petición al servidor y devolvemos todos los usuarios de la app
	const resp = await fetchConToken(`categorie/${ id }`);
	const data = await resp.json();

	return data;

}
