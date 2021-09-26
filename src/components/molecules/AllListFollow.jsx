
import React from 'react';

import ItemEmptyListFollow from '../atoms/ItemEmptyListFollow';

const AllListFollow = ({txtFollowing, idUser}) => {

	// AQUI RECORREMOS EL ARRAY DE USUARIOS SUBSCRIBERS Y COLOCAREMOS UNA CONDICIONAL
	return (
		<div className="container-listFollow">
			<h2 className="title-color">{`Lista de ${txtFollowing ? "seguidos" : "seguidores"} ${ idUser !== "123" ? "- usuario" : ""}`}</h2>
			<ItemEmptyListFollow text="Aún no has seguido." />

			{/* INICIO TIENE SOLICITUD */}
			{/* <div className="listFollow-allItems">

				<ItemAddListFollow />

				<ItemExistListFollow />
				<ItemExistListFollow />
				<ItemAddListFollow />

			</div> */}
			{/* FIN TIENE SOLICITUD */}
		</div>
	)
}

export default AllListFollow;
