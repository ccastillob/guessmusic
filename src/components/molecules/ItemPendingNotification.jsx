
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { SocketContext } from '../../context/SocketContext';
import GhostButton from '../atoms/GhostButton';
import PrimaryButton from '../atoms/PrimaryButton';

const ItemPendingNotification = ({ notification }) => {

	const { userIDSendsNotification: user } = notification;
	const { uid } = useSelector( state => state.auth );
	const { socket } = useContext( SocketContext );

	const handleConfirmNotification = ( userSend, userActive ) => {

		// Emito un evento para confirmar la notificación
		socket.emit( 'confirm-notification', {
			userSend,
			userActive,
		})

		Swal.fire({
			position: 'center',
			icon: 'success',
			title: `${user.name} fue añadida a tu lista de seguidores`,
			showConfirmButton: false,
			timer: 2000
		})

	}

	const handleCancelNotification = ( userSend, userActive ) => {

		// Emito un evento para cancelar la notificación
		socket.emit( 'cancel-notification', {
			userSend,
			userActive,
		})

		Swal.fire({
			position: 'center',
			icon: 'info',
			title: `Solicitud cancelada`,
			showConfirmButton: false,
			timer: 1500
		})

	}

	return (
		<div className="container-item_request">
			<h4 className="content-color text-justify"><span className="text-bold">{ user.name } { user.lastName }</span> te ha mandado una solicitud para seguirte. ¿Deseas añadirlo a tu lista de seguidores?</h4>
			<div className="container-buttons__request">
				<PrimaryButton event={ () => handleConfirmNotification( user.uid, uid ) } title="Si, añadir" otherClass="s-mr-4"/>
				<GhostButton event={ () => handleCancelNotification( user.uid, uid ) } title="No" otherClass="ghost-error300-color"/>
			</div>
		</div>
	)
}

export default ItemPendingNotification;
