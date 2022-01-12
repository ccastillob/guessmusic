
import React from 'react';
import { Link } from 'react-router-dom';

import IconRight from '../icons/IconRight';

const ItemViewMoreAchievement = ({ username }) => {
	return (
		<Link to={`/profile/${ username }/achievements`} className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
			<h4 className="content-color text-bold">Ver todos</h4>
			<i className="container-icon-arrowRightAchievement primary-color">
				<IconRight />
			</i>
		</Link>
	)
}

export default ItemViewMoreAchievement;
