
import React from 'react';

import IconVersus from '../icons/IconVersus';

const ItemCompleteAchievement = () => {

	return (
		<div className="container-item_achievement__complete">
			<i className="container-icon-achievementProfile primary-color">
				<IconVersus />
			</i>
			<div className="item-achievement__data__complete">
				<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
				<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
			</div>
		</div>
	)
}

export default ItemCompleteAchievement;
