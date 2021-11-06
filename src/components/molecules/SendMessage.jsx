
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClassicSpinner } from 'react-spinners-kit';

import { SocketContext } from '../../context/SocketContext';
import IconSend from '../icons/IconSend';

const SendMessage = () => {

	const [ message, setMessage ] = useState('');
	const { socket } = useContext( SocketContext );
	const { uid } = useSelector(state => state.auth);
	const { chatActivo } = useSelector(state => state.chat);
	const { followings: profileFollowings } = useSelector(state => state.otherProfile);

	const userConversation = profileFollowings?.filter( user => user.uid === uid )[0];
	const isValidConversation = userConversation?.stateSubscription;

	const onChange = ({ target }) => {
		setMessage( target.value )
	}

	const handleSendMessage = e => {
		e.preventDefault();

		if( message.length === 0 ){ return; }
		setMessage('')

		// Emitimos un evento de sockets para enviar el mensaje
		socket.emit( 'personal-message', {
			userOf: uid,
			userFor: chatActivo,
			userMessage: message
		})

	}

	return (

		( profileFollowings !== undefined ) ? (

			( !!isValidConversation ) ? (

				<form onSubmit={ handleSendMessage } className="chatSectionRight_footerConversation">
					<input
						type="text"
						placeholder="Escribe un mensaje"
						autoComplete="off"
						className="footerConversation__input text-overflow"
						value={ message }
						onChange={ onChange }
					/>
					<button type="submit" className="footerConversation__iconSend">
						<i className="container-icon-sendMessage primary-color">
							<IconSend />
						</i>
					</button>
				</form>

			) : (

				<div className="chatSectionRight_footerConversation">
					<h4 className="title-color text-bold s-center s-to-center">Ambos deben ser amigos para entablar una conversación</h4>
				</div>

			)

		) : (
			<div className="chatSectionRight_footerConversation spinner-chatconversation-message">
				<ClassicSpinner color="#8e8e8f" size={30} />
			</div>
		)

	)
}

export default SendMessage;
