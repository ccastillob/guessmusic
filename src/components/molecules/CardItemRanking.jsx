
import React from 'react';
import { Link } from 'react-router-dom';

import IconShield from '../icons/IconShield';

const CardItemRanking = ({status}) => {

	return (
		<Link to="/profile/123456" className={`ed-grid s-grid-7 s-cols-7 m-gap-4 container-card_ranking s-mb-4 s-py-4 ${status}`} >
			<h4 className="ranking__number content-color s-cols-1">1.</h4>
			<div className="ranking__data s-cols-4">
				<div className="data-item__userRanking">
					<img alt="userRanking" src="https://th.bing.com/th/id/R.28885272c4135409b5ada833fa75174f?rik=4XZMGPR6dd05Qg&pid=ImgRaw&r=0" />
				</div>
				<div className="data-item__sectionRanking">
					<h4 className="sectionRanking__user content-color text_line-clamp">Nombre A.</h4>
					<div className="sectionRanking__content_divition s-cross-center primary-color">
						<i className="container-icon-shieldCard">
							<IconShield />
						</i>
						<small className="text_line-clamp">División</small>
					</div>
				</div>
			</div>
			<h4 className="ranking__experience content-color s-cols-2 s-right">999999 EXP</h4>
		</Link>
	)
}

CardItemRanking.defaultProps = {
	status: ""
}

export default CardItemRanking;
