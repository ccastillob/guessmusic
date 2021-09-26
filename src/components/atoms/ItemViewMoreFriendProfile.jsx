
import React from 'react';
import { Link } from 'react-router-dom';

import IconRight from '../icons/IconRight';

const ItemViewMoreFriendProfile = () => {

	return (
		<Link to="/profile/123/followers" className="next-footer__friends ed-grid s-grid-2 s-gap-4">
			<h4 className="content-color text-bold">Ver número más</h4>
			<i className="container-icon-arrowRightFriend primary-color">
				<IconRight />
			</i>
		</Link>
	)
}

export default ItemViewMoreFriendProfile;
