
import React, { useRef } from 'react';

import { arrowLeftVisible } from '../../helpers/arrowCategorie';
import IconLeft from '../icons/IconLeft';

const ArrowPrev = ({ onClick, currentSlide }) => {

	const btnLeft = useRef(null);
	arrowLeftVisible({ currentSlide, btnLeft });

	return (
		<div ref={btnLeft} onClick={ onClick } className="carousel-arrow carousel-arrow-left">
			<i className="container-icon-arrowCategorie">
				<IconLeft />
			</i>
		</div>
	)

}

export default ArrowPrev;
