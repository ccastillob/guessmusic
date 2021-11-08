
import { useEffect, useState } from "react"

// Importamos la función para obtener las categorias de un usuario pasando el id
import { getCategorieUser } from "../../helpers/categorie/getCategorieUser";

// Exportamos y creamos una función para que retorne los usuarios
export const useFetchUserCategorie = (id) => {

	const [state, setState] = useState({
		data: null,
		loading: true,
	});

	// https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

	useEffect(() => {
		let isActive = true;
		getCategorieUser(id)
			.then( info => {
				if ( isActive )
				setState({
					data: info.categorie,
					loading: false,
				})
			});
			return () => { isActive = false };

	}, [ id ]);

	return state;

}