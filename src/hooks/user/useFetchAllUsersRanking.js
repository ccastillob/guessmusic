
import { useEffect, useState } from "react"

// Importamos la función para obtener todos los usuarios del app
import { getAllUsersRanking } from "../../helpers/user/getAllUsersRanking";

// Exportamos y creamos una función para que retorne los usuarios
export const useFetchAllUsersRanking = (page) => {

	const [state, setState] = useState({
		data: null,
		totalPages: null,
		totalUsers: null,
		loading: true,
	});

	// https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

	useEffect(() => {
		let isActive = true;
		getAllUsersRanking(page)
			.then( info => {
				if ( isActive )
				setState({
					data: info.users,
					totalPages: info.totalPages,
					totalUsers: info.totalUsers,
					loading: false,
				})
			});
			return () => { isActive = false };

	}, [ page ]);

	return state;

}