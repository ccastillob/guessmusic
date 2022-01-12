
import React from 'react';
import { useSelector } from 'react-redux';

import GhostButton from '../atoms/GhostButton';

const ChatSelectUser = () => {

	const { usuariosChat } = useSelector(state => state.chat);
	const myFriendsChat = usuariosChat?.filter( user => user.stateSubscription === true );

	return (

		( !( usuariosChat === null && myFriendsChat === undefined ) ) && (

			<div className="container-chatSelectUser">
				<div className="chatSelectUser-content">
					{
						(myFriendsChat?.length > 0 )
						? (
							<>
								<h1 className="title-color s-center s-mb-2">Seleccione un chat</h1>
								<h3 className="content-color s-center">para poder establecer una conversación</h3>
							</>
						)
						: (
							<>
								<h1 className="title-color s-center s-mb-2">Aún no tienes amigos</h1>
								<h3 className="content-color s-center s-mb-4">Puedes mandar una solicitud de amistad ingresando a su perfil</h3>
								<GhostButton urlTo="/ranking" title="Busca amigos" otherClass="ghost-primary900-color" link={ true } />
							</>
						)
					}
				</div>
			</div>

		)

	)

}

export default ChatSelectUser;
