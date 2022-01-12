
import React from 'react';

import IconLeft from '../icons/IconLeft';
import IconRight from '../icons/IconRight';

const ArrowsRanking = ({ totalPages, page, setPage, setView }) => {

	const goToPrevious = () => {

		setPage( Math.max( 0, page - 1 ) );

		if( page !== 0 ) {
			setView(false);
		}

	}

	const goToNext = () => {

		setPage( Math.min( totalPages - 1, page + 1 ) );

		if( page !== (totalPages - 1) ) {
			setView(false);
		}

	}

	return (
		<div className="ed-grid s-grid-2 m-gap-2 container-arrows_ranking">
			<div className="ranking__content-left s-cross-center">
				<div onClick={ goToPrevious } className={`content-left__item ${ ( page === 0 ) && "disabled" }`}>
					<i className="container-icon-arrowLeftRanking">
						<IconLeft />
					</i>
				</div>
			</div>
			<div className="ranking__content-right s-cross-center">
				<div onClick={ goToNext } className={`content-right__item ${ ( page === (totalPages - 1) ) && "disabled" }`}>
					<i className="container-icon-arrowRightRanking">
						<IconRight />
					</i>
				</div>
			</div>
		</div>
	)

}

export default ArrowsRanking;
