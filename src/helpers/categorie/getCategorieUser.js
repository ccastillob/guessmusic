
import { fetchConToken } from "../fetch";

export const getCategorieUser = async(id) => {

	const resp = await fetchConToken(`categorie/${ id }`);
	const data = await resp.json();

	return data;

}
