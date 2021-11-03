
import React from 'react';
import { useSelector } from 'react-redux';

import ItemCompleteAchievement from '../atoms/ItemCompleteAchievement';
import ItemPendingAchievement from '../atoms/ItemPendingAchievement';
import ItemViewMoreAchievement from '../atoms/ItemViewMoreAchievement';

const SectionAchievementProfile = () => {

	// const { achievements } = useSelector(state => state.achievement);
	// const { categories } = useSelector(state => state.categorie);
	const { followings, data, achievements, categories } = useSelector(state => state.otherProfile);
	// console.log(achievements);
	// console.log(categories);
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

					{/* <ItemPendingAchievement />
					<ItemPendingAchievement />

					<ItemCompleteAchievement />

					<ItemPendingAchievement />

					<ItemPendingAchievement /> */}

				</div>

				<ItemViewMoreAchievement username={ data.username } />

			</div>

		) : (
			<h1>Skeleton de logros general</h1>
		)
	)
}

export default SectionAchievementProfile;
