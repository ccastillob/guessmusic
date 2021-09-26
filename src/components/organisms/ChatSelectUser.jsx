
import React from 'react';

import GhostButton from '../atoms/GhostButton';

const ChatSelectUser = () => {

	return (
		<div className="container-chatSelectUser">
			<div className="chatSelectUser-content">

				{/* <h1 className="title-color s-center s-mb-2">Seleccione un chat</h1> */}
				{/* <h3 className="content-color s-center">para poder establecer una conversación</h3> */}

				<h1 className="title-color s-center s-mb-2">Aún no tienes amigos</h1>
				<h3 className="content-color s-center s-mb-4">puedes mandar una solicitud de amistad ingresando a su perfil</h3>
				<GhostButton title="Busca amigos" otherClass="ghost-primary900-color" />

			</div>
		</div>
	)
}

export default ChatSelectUser;
