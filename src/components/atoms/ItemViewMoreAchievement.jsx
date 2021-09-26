
import React from 'react';
import { Link } from 'react-router-dom';

import IconRight from '../icons/IconRight';

const ItemViewMoreAchievement = () => {

	return (
		<Link to="/profile/123/achievements" className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
			<h4 className="content-color text-bold">Ver todos `ItemViewMoreAchievement`</h4>
			<i className="container-icon-arrowRightAchievement primary-color">
				<IconRight />
			</i>
		</Link>
	)
}

export default ItemViewMoreAchievement;
