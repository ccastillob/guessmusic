
import { useEffect, useState } from "react";

import { getCategorieUser } from "../../helpers/categorie/getCategorieUser";

export const useFetchUserCategorie = (id) => {

	const [state, setState] = useState({
		data: null,
		loading: true,
	});

	useEffect(() => {

		let isActive = true;

		getCategorieUser(id)
			.then( info => {

				if ( isActive )
				setState({
					data: info.categorie,
					loading: false,
				});

			});

			return () => { isActive = false };

	}, [ id ]);

	return state;

}