
// Funciones para visualizar las flechas izq/der en las categorias

// Flecha izquierda
const arrowLeftVisible = ( {currentSlide, btnLeft} ) => {

	// Si el slider actual es igual a cero entonces no se visualiza
	if( currentSlide === 0 ) {
		btnLeft.current && (btnLeft.current.style.display = "none")
	}else {
		btnLeft.current && (btnLeft.current.style.display = "flex")
	}

}

// Flecha derecha
const arrowRightVisible = ( {currentSlide, btnRight} ) => {

	// Se almacena el valor del ancho viewport a medida que vamos redimensionando la ventana del navegador
	const bp = window.document.body.getBoundingClientRect().width;

	// Si el ancho viewport es menor a 640 o igual
	if( bp < 640 || bp === 640) {

		if(currentSlide === 8) {
			btnRight.current && (btnRight.current.style.display = "none")
		}else {
			btnRight.current && (btnRight.current.style.display = "flex")
		}

	}

	// Si el ancho viewport es mayor a 640 y menor que 1024
	if( bp > 640 && bp < 1024 ) {

		if(currentSlide === 6) {
			btnRight.current && (btnRight.current.style.display = "none")
		}else {
			btnRight.current && (btnRight.current.style.display = "flex")
		}

	}

	// Si el ancho viewport es igual a 1024 o mayor
	if( bp === 1024 || bp > 1024 ) {

		if(currentSlide === 5) {
			btnRight.current && (btnRight.current.style.display = "none")
		}else {
			btnRight.current && (btnRight.current.style.display = "flex")
		}

	}

}

export {
	arrowLeftVisible,
	arrowRightVisible
}