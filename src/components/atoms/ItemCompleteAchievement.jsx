
import React from 'react';

import IconVersus from '../icons/IconVersus';

const ItemCompleteAchievement = ({ achievement, indice }) => {

	return (
		<div className="container-item_achievement__complete">
			<i className="container-icon-achievementProfile primary-color">
				<IconVersus />
			</i>
			<div className="item-achievement__data__complete">
				<h4 className="content-color text-bold text-overflow">{ achievement.nameAchiev }</h4>
				<h6 className="auxiliary-color text-overflow">Completaste el nivel { indice + 1 }</h6>
			</div>
		</div>
	)
}

export default ItemCompleteAchievement;
