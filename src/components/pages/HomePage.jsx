
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadingCategories } from '../../actions/categorie';
import { startUserData } from '../../actions/user';
import CardLockedLevel from '../molecules/CardLockedLevel';
import CardUnlockedLevel from '../molecules/CardUnlockedLevel';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SkeletonHomePage from '../skeletons/SkeletonHomePage';

const HomePage = () => {

	const dispatch = useDispatch();
	const { categories } = useSelector(state => state.categorie);
	const { uid } = useSelector( state => state.auth );

	useEffect(() => {

		dispatch( loadingCategories(uid) )
		dispatch( startUserData(uid) )

	}, [ dispatch, uid ])

	return (

		( categories !== null ) ? (

			<>
				<HeaderMenu active="play" />
				<div className="ed-grid main-container container-homepage">
					<h1 className="title-color s-center">Niveles</h1>
					<h3 className="content-color s-center">Completa los niveles, gana experiencia y consigue logros.</h3>
					<div className="ed-grid s-grid-12">
						{
							categories.map( ( levels, index ) =>

								( levels.stateLevel ) ?
									<CardUnlockedLevel  key={ levels._id } levels={ levels } index={ index } /> :
									<CardLockedLevel key={ levels._id } levels={ levels } index={ index } />

							)
						}

					</div>
				</div>
				<FooterMenu active="play" />
			</>

		) : (
			<SkeletonHomePage />
		)

	)
}

export default HomePage;
