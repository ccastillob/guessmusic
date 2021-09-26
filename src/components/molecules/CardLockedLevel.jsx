
import React from 'react';

import IconPassword from '../icons/IconPassword';
import IconShield from '../icons/IconShield';

const CardLockedLevel = () => {

	return (
		<div className={`ed-grid s-grid-2 m-gap-4 container-card_level blocked s-mb-4`} >
			<div className="level__content-icon blocked">
				<i className="container-icon-levelHome">
					<IconShield />
				</i>
			</div>
			<div className="level__data-item">
				<div className="data-item__blocked s-mb-1">
					<i className="container-icon-blockedHome s-mr-1">
						<IconPassword />
					</i>
					<h3 className="text-bold">Nivel 2</h3>
				</div>
				<h6 className="auxiliary-color s-center">Acierta 8 canciones del Nivel 1</h6>
			</div>
		</div>
	)
}

export default CardLockedLevel;
