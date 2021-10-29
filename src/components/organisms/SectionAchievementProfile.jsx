
import React from 'react';

import ItemCompleteAchievement from '../atoms/ItemCompleteAchievement';
import ItemPendingAchievement from '../atoms/ItemPendingAchievement';
import ItemViewMoreAchievement from '../atoms/ItemViewMoreAchievement';

const SectionAchievementProfile = () => {

	return (
		<div className="section-achievements s-cols-12">
			<h2 className="title-color s-mb-4">Logros</h2>
			<div className="achievements-allItems">

				<ItemPendingAchievement />
				<ItemPendingAchievement />

				<ItemCompleteAchievement />

				<ItemPendingAchievement />

				<ItemPendingAchievement />

			</div>

			<ItemViewMoreAchievement />

		</div>
	)
}

export default SectionAchievementProfile;
