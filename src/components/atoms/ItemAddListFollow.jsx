
import React from 'react';

import IconAddUserFollow from '../icons/IconAddUserFollow';

const ItemAddListFollow = () => {

	return (
		<div className="container-item_follow">
			<div className="group-item_follow">
				<div className="item-follow__profileFollow">
					<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
				</div>
				<div className="item-follow__data">
					<h3 className="data-name text_line-clamp">Bumblebee</h3>
					<h4 className="data-experience text_line-clamp">7800 EXP</h4>
				</div>
			</div>
			<div className="item-follow__button normal-primary-color">
				<i className="container-icon-follow">
					<IconAddUserFollow />
				</i>
			</div>
		</div>
	)
}

export default ItemAddListFollow;
