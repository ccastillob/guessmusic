
const arrowLeftVisible = ( {currentSlide, btnLeft} ) => {

	if( currentSlide === 0 ) {
		btnLeft.current && (btnLeft.current.style.display = "none");
	}else {
		btnLeft.current && (btnLeft.current.style.display = "flex");
	}

}

const arrowRightVisible = ( {currentSlide, btnRight} ) => {

	const bp = window.document.body.getBoundingClientRect().width;

	if( bp < 640 || bp === 640) {

		if(currentSlide === 8) {
			btnRight.current && (btnRight.current.style.display = "none");
		}else {
			btnRight.current && (btnRight.current.style.display = "flex");
		}

	}

	if( bp > 640 && bp < 1024 ) {

		if(currentSlide === 6) {
			btnRight.current && (btnRight.current.style.display = "none");
		}else {
			btnRight.current && (btnRight.current.style.display = "flex");
		}

	}

	if( bp === 1024 || bp > 1024 ) {

		if(currentSlide === 5) {
			btnRight.current && (btnRight.current.style.display = "none");
		}else {
			btnRight.current && (btnRight.current.style.display = "flex");
		}

	}

}

export {
	arrowLeftVisible,
	arrowRightVisible,
}