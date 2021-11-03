
import React from 'react';

import IconVersus from '../icons/IconVersus';

const ItemPendingAchievement = ({ achievement, indice, categories }) => {

	// console.log('indice');
	// console.log(indice);
	// console.log('categorias');
	// console.log(categories);
	const totalSongs = categories?.[indice].dataSongs?.length;
	const numberCorrectSongs = categories?.[indice].dataSongs.filter( song => song.stateSong === true )?.length;
	const percentage = numberCorrectSongs*10;

	return (
		<div className="container-item_achievement">
			<i className="container-icon-achievementProfile primary-color">
				<IconVersus />
			</i>
			<div className="item-achievement__data">
				<div className="data_achievement__description s-mb-2">
					<h4 className="content-color text-bold text-overflow">{ achievement.nameAchiev }</h4>
					<h4 className="content-color">{ numberCorrectSongs } / { totalSongs }</h4>
				</div>
				<div className="data_achievement__progress s-mb-1">
					<div className="progress__porcentage" style={{width: `${ percentage }%`}}></div>
				</div>
				<h6 className="auxiliary-color text-overflow">Completa el nivel { indice + 1 }</h6>
			</div>
		</div>
	)
}

export default ItemPendingAchievement;
