
import React, { useRef } from 'react';

import { arrowRightVisible } from '../../helpers/arrowCategorie';
import IconRight from '../icons/IconRight';

const ArrowNext = ({ onClick, currentSlide }) => {

	const btnRight = useRef(null);
	arrowRightVisible({ currentSlide, btnRight });

	return (
		<div ref={btnRight} onClick={ onClick } className="carousel-arrow carousel-arrow-right">
			<i className="container-icon-arrowCategorie">
				<IconRight />
			</i>
		</div>
	)

}

export default ArrowNext;
