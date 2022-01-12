
import React from 'react';
import { Link } from 'react-router-dom';

import IconShield from '../icons/IconShield';

const CardUnlockedLevel = ({ levels, index }) => {

	const numberCompleteSongs = levels.dataSongs.filter( song => song.stateSong === true );

	return (
		<Link to={`/playing/${ levels._id }/classic`} className={`ed-grid s-grid-2 m-gap-4 container-card_level s-mb-4`} >
			<div className="level__content-icon">
				<i className="container-icon-levelHome">
					<IconShield />
				</i>
			</div>
			<div className="level__data-item">
				<h3 className="text-bold content-color s-center s-mb-4">Nivel { index + 1 }</h3>
				<h4 className="content-color s-center s-mb-2">{ numberCompleteSongs.length } / 10</h4>
				<h4 className="content-color s-center">completadas</h4>
			</div>
		</Link>
	)

}

export default CardUnlockedLevel;
