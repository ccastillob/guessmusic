
import { useEffect, useState } from "react";

import { getAllUsersRanking } from "../../helpers/user/getAllUsersRanking";

export const useFetchAllUsersRanking = (page) => {

	const [state, setState] = useState({
		data: null,
		totalPages: null,
		totalUsers: null,
		loading: true,
	});

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
				});

			});

			return () => { isActive = false };

	}, [ page ]);

	return state;

}