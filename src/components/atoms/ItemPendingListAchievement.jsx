
import React from 'react';

import IconVersus from '../icons/IconVersus';

const ItemPendingListAchievement = () => {

	return (
		<div className="container-item_listAchievement">
			<i className="container-icon-achievementProfile primary-color">
				<IconVersus />
			</i>
			<div className="item-achievement__data">
				<div className="data_achievement__description s-mb-2">
					<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
					<h4 className="content-color">04 / 10</h4>
				</div>
				<div className="data_achievement__progress s-mb-1">
					<div className="progress__porcentage" style={{width: `${40}%`}}></div>
				</div>
				<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
			</div>
		</div>
	)
}

export default ItemPendingListAchievement;
