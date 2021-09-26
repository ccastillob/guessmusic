
import React from 'react';

import ItemCompleteListAchievement from '../atoms/ItemCompleteListAchievement';
import ItemPendingListAchievement from '../atoms/ItemPendingListAchievement';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';

const ListAchievementsPage = ({match}) => {

	// console.log(match);

	return (
		<>
			<HeaderMenuSecondary />
			<div className="ed-grid s-grid-12 container-achievementpage main-container">
				<div className="container-listAchievement">
					<h2 className="title-color">Lista de logros { match.params.idUser !== "123" && "- usuario" }</h2>
					<div className="listAchievement-allItems">

						<ItemPendingListAchievement />

						<ItemCompleteListAchievement />

						<ItemCompleteListAchievement />

						<ItemPendingListAchievement />
						<ItemPendingListAchievement />

					</div>
				</div>
			</div>
		</>
	)
}

export default ListAchievementsPage;
