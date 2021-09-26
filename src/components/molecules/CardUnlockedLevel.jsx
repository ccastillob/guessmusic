
import React from 'react';
import { Link } from 'react-router-dom';

import IconShield from '../icons/IconShield';

const CardUnlockedLevel = () => {

	return (
		<Link to="/playing/54321/classic" className={`ed-grid s-grid-2 m-gap-4 container-card_level s-mb-4`} >
			<div className="level__content-icon">
				<i className="container-icon-levelHome">
					<IconShield />
				</i>
			</div>
			<div className="level__data-item">
				<h3 className="text-bold content-color s-center s-mb-4">Nivel 1</h3>
				<h4 className="content-color s-center s-mb-2">01 / 10</h4>
				<h4 className="content-color s-center">completadas</h4>
			</div>
		</Link>
	)
}

export default CardUnlockedLevel;
