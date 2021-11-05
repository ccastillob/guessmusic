
// Funcion para obtener la eficiencia
export const getPerformance = ( songCorrect ) => {

	if( songCorrect >= 0 && songCorrect <= 3 ) {
		return 'Mala';
	}

	if( songCorrect > 3 && songCorrect <= 6 ) {
		return 'Regular';
	}

	if( songCorrect > 6 && songCorrect <= 9 ) {
		return 'Buena';
	}

	if( songCorrect === 10 ) {
		return 'Excelente';
	}

}