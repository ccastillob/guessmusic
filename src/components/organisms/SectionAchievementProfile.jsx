
import React from 'react';
import { useSelector } from 'react-redux';

import ItemCompleteAchievement from '../atoms/ItemCompleteAchievement';
import ItemPendingAchievement from '../atoms/ItemPendingAchievement';
import ItemViewMoreAchievement from '../atoms/ItemViewMoreAchievement';
import SkeletonSectionAchievementProfile from '../skeletons/SkeletonSectionAchievementProfile';

const SectionAchievementProfile = () => {

	const { followings, data, achievements, categories } = useSelector(state => state.otherProfile);
	const arrOnlyFiveAchievements = achievements?.slice(0,3);

	return (

		( followings !== undefined && achievements !== null && data !== null ) ? (

			<div className="section-achievements s-cols-12">
				<h2 className="title-color s-mb-4">Logros</h2>
				<div className="achievements-allItems">
					{
						arrOnlyFiveAchievements?.map( (achiev, index) =>
							achiev.stateAchiev ? <ItemCompleteAchievement key={ achiev._id } achievement={ achiev } indice={ index } /> : <ItemPendingAchievement key={ achiev._id } achievement={ achiev } indice={ index } categories={ categories } />
						)
					}

				</div>

				<ItemViewMoreAchievement username={ data.username } />

			</div>

		) : (
			<SkeletonSectionAchievementProfile />
		)
	)
}

export default SectionAchievementProfile;
