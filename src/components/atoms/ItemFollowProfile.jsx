
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { SocketContext } from '../../context/SocketContext';
import IconAddUserFollow from '../icons/IconAddUserFollow';
import IconUserWaiting from '../icons/IconUserWaiting';
import IconButton from './IconButton';

const ItemFollowProfile = ({ friend }) => {

	const { socket } = useContext( SocketContext );
	const { followings: userFollowings, data } = useSelector( state => state.user );
	const { imgAvatar, lastName, name, username, score, uid } = friend;

	const handleUserWaiting = (id) => {

		Swal.fire({
			title: `¿Deseas cancelar la solicitud?`,
			showCancelButton: true,
			confirmButtonColor: '#1739b5',
			cancelButtonColor: '#dd6482',
			confirmButtonText: 'Si, cancelar.',
			cancelButtonText: 'No.',
		}).then((result) => {

			if (result.isConfirmed) {

				socket.emit( 'cancel-request', {
					userSend: id,
					userActive: data.uid,
				});

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Solicitud cancelada',
					showConfirmButton: false,
					timer: 1500,
				});

			}

		});

	}

	const handleUserAdd = (id) => {

		Swal.fire({
			title: `¿Deseas enviar una solicitud a ${ name }?`,
			showCancelButton: true,
			confirmButtonColor: '#1739b5',
			cancelButtonColor: '#dd6482',
			confirmButtonText: 'Si, enviar.',
			cancelButtonText: 'No.',
		}).then((result) => {

			if (result.isConfirmed) {

				socket.emit( 'start-following', {
					userSend: id,
					userActive: data.uid,
				});

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Solicitud enviada',
					showConfirmButton: false,
					timer: 1500,
				});

			}

		});

	}

	const arrUsersWithStateFalse = userFollowings?.filter( user => user.stateSubscription === false);
	const indexOfUsersWithStateFalse = arrUsersWithStateFalse?.map( user => user.uid );
	const validUserWaiting = indexOfUsersWithStateFalse?.includes(uid);
	const arrUsersWithStateTrue = userFollowings?.filter( user => user.stateSubscription === true);
	const indexOfUsersWithStateTrue = arrUsersWithStateTrue?.map( user => user.uid );
	const validUserTrue = indexOfUsersWithStateTrue?.includes(uid);

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
