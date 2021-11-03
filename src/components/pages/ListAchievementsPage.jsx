
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearProfileData, startProfileAchievements, startProfileCategories, startProfileData } from '../../actions/profile';

import AllListAchievement from '../molecules/AllListAchievement';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';

const ListAchievementsPage = ({match}) => {

	const dispatch = useDispatch();
	const { achievements, categories } = useSelector(state => state.otherProfile );

	useEffect(() => {

		dispatch( clearProfileData() )
		dispatch( startProfileData( match.params.username ) );
		dispatch( startProfileAchievements( match.params.username ) );
		dispatch( startProfileCategories( match.params.username ) );

	}, [ dispatch, match ])

	return (
		<>
			<HeaderMenuSecondary />
			<div className="ed-grid s-grid-12 container-achievementpage main-container">
				<AllListAchievement achievements={ achievements } categories={ categories } />
			</div>
		</>
	)
}

export default ListAchievementsPage;
