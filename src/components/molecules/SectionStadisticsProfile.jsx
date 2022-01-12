
import React from 'react';
import { useSelector } from 'react-redux';

import { getDivition } from '../../helpers/getDivition';
import IconExp from '../icons/IconExp';
import IconShield from '../icons/IconShield';
import SkeletonSectionStadisticsProfile from '../skeletons/SkeletonSectionStadisticsProfile';

const SectionStadisticsProfile = ({ data }) => {

	const { followings } = useSelector(state => state.otherProfile);

	return (

		( followings !== undefined ) ? (

			<div className="section-stadistics s-mb-4">
				<h2 className="title-color s-mb-4">Estadisticas</h2>

				<div className="stadistics-allItems ed-grid s-grid-2 m-grid-2">
					<div className="item-experience">
						<i className="container-icon-experienceProfile primary-color s-mr-2">
							<IconExp />
						</i>
						<div className="experience__data">
							<h4 className="content-color text-bold s-mb-1">{ data?.score }</h4>
							<h6 className="auxiliary-color">EXP totales</h6>
						</div>
					</div>
					<div className="item-divition">
						<i className={`container-icon-shieldProfile ${getDivition( data?.score )?.toLowerCase()}-divition s-mr-2`}>
							<IconShield />
						</i>
						<div className="divition__data">
							<h4 className="content-color text-bold s-mb-1">{ getDivition( data?.score ) }</h4>
							<h6 className="auxiliary-color">División actual</h6>
						</div>
					</div>
				</div>
			</div>

		) : (
			<SkeletonSectionStadisticsProfile />
		)

	)

}

export default SectionStadisticsProfile;
