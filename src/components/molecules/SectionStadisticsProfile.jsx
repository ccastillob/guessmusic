
import React from 'react';
import IconExp from '../icons/IconExp';
import IconShield from '../icons/IconShield';

const SectionStadisticsProfile = () => {

	return (
		<div className="section-stadistics s-mb-4">
			<h2 className="title-color s-mb-4">Estadisticas</h2>
			<div className="stadistics-allItems ed-grid s-grid-2 m-grid-2">
				<div className="item-experience">
					<i className="container-icon-experienceProfile primary-color s-mr-2">
						<IconExp />
					</i>
					<div className="experience__data">
						<h4 className="content-color text-bold s-mb-1">9500</h4>
						<h6 className="auxiliary-color">EXP totales</h6>
					</div>
				</div>
				<div className="item-divition">
					<i className="container-icon-shieldProfile divino-divition s-mr-2">
						<IconShield />
					</i>
					<div className="divition__data">
						<h4 className="content-color text-bold s-mb-1">Divino</h4>
						<h6 className="auxiliary-color">División actual</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionStadisticsProfile;
