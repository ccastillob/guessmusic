
import React from 'react';

import IconLeft from '../icons/IconLeft';
import IconRight from '../icons/IconRight';

const ArrowsRanking = () => {

	return (
		<div className="ed-grid s-grid-2 m-gap-2 container-arrows_ranking">
			<div className="ranking__content-left s-cross-center">
				<div className="content-left__item disabled">
					<i className="container-icon-arrowLeftRanking">
						<IconLeft />
					</i>
				</div>
			</div>
			<div className="ranking__content-right s-cross-center">
				<div className="content-right__item">
					<i className="container-icon-arrowRightRanking">
						<IconRight />
					</i>
				</div>
			</div>
		</div>
	)
}

export default ArrowsRanking;
