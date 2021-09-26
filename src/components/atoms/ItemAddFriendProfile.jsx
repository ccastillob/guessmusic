
import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from './IconButton';
import IconAddUserFollow from '../icons/IconAddUserFollow';

const ItemAddFriendProfile = () => {

	return (
		<div className="container-item_friend">
			<Link to="/profile/121" className="group-item_friend content-color">
				<div className="item-friend__profile">
					<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
				</div>
				<div className="item-friend__data">
					<h4 className="data-name text_line-clamp">Bumblebee</h4>
					<small className="data-experience text_line-clamp">7800 EXP</small>
				</div>
			</Link>
			<IconButton icon={<IconAddUserFollow />} />
		</div>
	)
}

export default ItemAddFriendProfile;
