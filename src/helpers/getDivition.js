
// Funcion para obtener la división
export const getDivition = ( score ) => {

	if( score >= 0 && score <= 100 ) {
		return "Heraldo";
	}else if( score >= 102 && score <= 500 ){
		return "Guardian";
	}else if( score >= 502 && score <= 1500 ){
		return "Cruzado";
	}else if( score >= 1502 && score <= 3500 ){
		return "Arconte";
	}else if( score >= 3502 && score <= 6500 ){
		return "Leyenda";
	}else if( score >= 6502 && score <= 8500 ){
		return "Ancestral";
	}else if( score >= 8502 ){
		return "Divino";
	}else {
		return null
	}

}
