
import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { getDivition } from '../../helpers/getDivition';
import IconShield from '../icons/IconShield';

const CardItemRanking = ({ status, user, position, page }) => {
	return (
		<Link to={`/profile/${ user.username }`} className={`ed-grid s-grid-7 s-cols-7 m-gap-4 container-card_ranking s-mb-4 s-py-4 ${status}`} >
			<h4 className="ranking__number content-color s-cols-1">{ (5*page +( position + 1)) }.</h4>
			<div className="ranking__data s-cols-4">
				<div className="data-item__userRanking">
					<LazyLoadImage
						alt="imageRanking"
						src={ user.imgAvatar }
						effect="blur"
						className="avatar_ranking"
					/>
				</div>
				<div className="data-item__sectionRanking">
					<h4 className="sectionRanking__user content-color text_line-clamp">{ user.name } { user.lastName }</h4>
					<div className={`sectionRanking__content_divition s-cross-center primary-color ${ getDivition( user.score )?.toLowerCase() }-divition`}>
						<i className={`container-icon-shieldCard`}>
							<IconShield />
						</i>
						<small className="text_line-clamp">{ getDivition( user.score ) }</small>
					</div>
				</div>
			</div>
			<h4 className="ranking__experience content-color s-cols-2 s-right">{ user.score } EXP</h4>
		</Link>
	)
}

CardItemRanking.defaultProps = {
	status: ""
}

export default CardItemRanking;
