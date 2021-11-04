
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { SocketContext } from '../../context/SocketContext';
import IconAddUserFollow from '../icons/IconAddUserFollow';
import IconUserWaiting from '../icons/IconUserWaiting';
import IconButton from './IconButton';

const ItemFollowProfile = ({ friend }) => {

	// Estoy imprimiendo solo los usuarios que tienen true en su estado
	const { socket } = useContext( SocketContext );
	const { followings: userFollowings, data } = useSelector(state => state.user );
	const { imgAvatar, lastName, name, username, score, uid } = friend;

	const handleUserWaiting = (id) => {

		socket.emit( 'cancel-request', {
			userSend: id,
			userActive: data.uid,
		})

	}

	const handleUserAdd = (id) => {

		socket.emit( 'start-following', {
			userSend: id,
			userActive: data.uid,
		})

	}

	// TODO: COLOCAR ESTA FUNCIONALIDAD EN UN ARCHIVO APARTE

	// Voy a filtrar todos mis amigos de la lista con estado en false(array de usuarios)
	const arrUsersWithStateFalse = userFollowings?.filter( user => user.stateSubscription === false);

	// Vamos a sacar su id de estos usuarios
	const indexOfUsersWithStateFalse = arrUsersWithStateFalse?.map( user => user.uid );

	// Vamos a validar si un usuario que esta en espera se encuentra en la lista de la otra persona
	const validUserWaiting = indexOfUsersWithStateFalse?.includes(uid)



	// Necesito una lista de usuario con estado en true
	const arrUsersWithStateTrue = userFollowings?.filter( user => user.stateSubscription === true);

	// De esta lista saco solo el ID de cada uno
	const indexOfUsersWithStateTrue = arrUsersWithStateTrue?.map( user => user.uid );

	// Valido que el usuario ingresado se encuentre en la lista con estado true
	const validUserTrue = indexOfUsersWithStateTrue?.includes(uid)

	return (
		<div className="container-item_friend__exist">
			<Link to={`/profile/${username}`} className="group-item_friend content-color">
				<div className="item-friend__profile">
					<LazyLoadImage
						alt="userprofile"
						src={ imgAvatar }
						effect="blur"
						className="avatar_follow"
					/>
				</div>
				<div className="item-friend__data-exist">
					<h4 className="data-name text_line-clamp">{ name } { lastName }</h4>
					<small className="data-experience text_line-clamp">{ score } EXP</small>
				</div>
			</Link>

			{
				// Valido que el id que se ingresa sea diferente al usuario que esta conectado
				// Valido que no se encuentre en la lista de usuarios con estado true
				(data.uid !== uid && !validUserTrue ) && (

					( validUserWaiting ) ? (
						<IconButton event={ () => handleUserWaiting(uid) } icon={<IconUserWaiting />} />
					) : (
						<IconButton event={ () => handleUserAdd(uid) } icon={<IconAddUserFollow />} />
					)

				)

			}

		</div>
	)
}

export default ItemFollowProfile;
