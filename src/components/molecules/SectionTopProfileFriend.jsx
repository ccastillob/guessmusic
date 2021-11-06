
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { SocketContext } from '../../context/SocketContext';
import { getCreatedAt } from '../../helpers/getTime';
import FollowButton from '../atoms/FollowButton';
import IconAddUserFollow from '../icons/IconAddUserFollow';
import IconDate from '../icons/IconDate';
import IconFollow from '../icons/IconFollow';
import IconUserSelect from '../icons/IconUserSelect';
import IconUserWaiting from '../icons/IconUserWaiting';
import SkeletonTopProfileFriend from '../skeletons/SkeletonTopProfileFriend';

const SectionTopProfileFriend = () => {

	const { data: profile, followings: profileFollowings, followers: profileFollowers } = useSelector(state => state.otherProfile)
	const { socket } = useContext( SocketContext );
	// Estoy imprimiendo solo los usuarios que tienen true en su estado
	const { followings: userFollowings } = useSelector(state => state.user );
	const { uid } = useSelector(state => state.auth)
	const arrProfileFriendFollowings = profileFollowings?.filter( following => following?.stateSubscription === true );
	const arrProfileFriendFollowers = profileFollowers?.filter( follower => follower?.stateSubscriber === true );

	const handleFollowing = ( userSend ) => {

		Swal.fire({
			title: `¿Deseas enviar una solicitud a ${ profile?.name }?`,
			showCancelButton: true,
			confirmButtonColor: '#1739b5',
			cancelButtonColor: '#dd6482',
			confirmButtonText: 'Si, enviar.',
			cancelButtonText: 'No.'
		}).then((result) => {
			if (result.isConfirmed) {

				socket.emit( 'start-following', {
					userSend,
					userActive: uid,
				})

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Solicitud enviada',
					showConfirmButton: false,
					timer: 1500
				})
			}
		})

	}

	const handleCancelRequest = ( userSend ) => {

		Swal.fire({
			title: `¿Deseas cancelar la solicitud?`,
			showCancelButton: true,
			confirmButtonColor: '#1739b5',
			cancelButtonColor: '#dd6482',
			confirmButtonText: 'Si, cancelar.',
			cancelButtonText: 'No.'
		}).then((result) => {
			if (result.isConfirmed) {

				socket.emit( 'cancel-request', {
					userSend,
					userActive: uid,
				})

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Solicitud cancelada',
					showConfirmButton: false,
					timer: 1500
				})
			}
		})

	}

	const handleNotFollowing = ( userSend ) => {

		Swal.fire({
			title: `¿Dejar de seguir a ${ profile?.name }?`,
			text: "*Esta acción tambien eliminará permanentemente los mensajes del chat",
			showCancelButton: true,
			confirmButtonColor: '#1739b5',
			cancelButtonColor: '#dd6482',
			confirmButtonText: 'Si, dejar de seguir.',
			cancelButtonText: 'No.'
		}).then((result) => {
			if (result.isConfirmed) {

				socket.emit( 'end-following', {
					userSend,
					userActive: uid,
				})

				Swal.fire({
					position: 'center',
					icon: 'success',
					title: `Dejaste de seguir a ${ profile?.name }`,
					showConfirmButton: false,
					timer: 1500
				})
			}
		})

	}

	// Voy a buscar si se encuentra en la lista
	const userIsMyList = userFollowings?.filter( user => user.uid === profile?.uid )

	// Voy a filtrar todos mis amigos de la lista con estado en false(array de usuarios)
	const arrUsersWithStateFalse = userFollowings?.filter( user => user.stateSubscription === false);

	// Vamos a sacar su id de estos usuarios
	const indexOfUsersWithStateFalse = arrUsersWithStateFalse?.map( user => user.uid );

	// Vamos a validar si un usuario que esta en espera se encuentra en la lista de la otra persona
	const validUserWaiting = indexOfUsersWithStateFalse?.includes(profile?.uid)

	return (

		( profile !== null && userIsMyList !== undefined  && profileFollowers !== undefined ) ? (
			<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">
			<div className="profileUser-container_left s-cols-12 m-cols-8">
				<div className="container-left_avatar s-order-2 m-order-1">

					<img src={ profile?.imgAvatar } alt="avatarProfile" />

				</div>
				<div className="container-left_data s-order-1 m-order-2">
					<h3 className="content-color text-bold s-mb-1 text_line-clamp">{ profile?.name }</h3>
					<h3 className="content-color text-bold s-mb-4 text_line-clamp">{ profile?.lastName }</h3>
					<div className="data-content__createdAt s-mb-1">
						<i className="container-icon-dateProfile content-color">
							<IconDate />
						</i>
						<h4 className="content-color text_line-clamp">Se unió el { getCreatedAt( profile?.createdAt ) }</h4>
					</div>
					<div className="data-content__friends">
						<i className="container-icon-followProfile content-color">
							<IconFollow />
						</i>
						<h4 className="content-color text_line-clamp text_web">{`Siguiendo a ${ arrProfileFriendFollowings?.length } / ${ arrProfileFriendFollowers?.length } ${ arrProfileFriendFollowers?.length === 1 ? "seguidor" : "seguidores"}`}</h4>
						<h4 className="content-color text_line-clamp text_mobile">{`${ arrProfileFriendFollowings?.length } ${ (arrProfileFriendFollowings?.length === 1) ? "amigo" : "amigos"}`}</h4>
					</div>
				</div>
			</div>


			<div className="profileUser-container_right s-cols-12 m-cols-4">
				{

					(userIsMyList?.length === 0) ? (
						<FollowButton event={ () => handleFollowing( profile?.uid ) } title="Seguir" icon={<IconAddUserFollow />} otherClass="follow-primary-color"/>

					) : (

						( validUserWaiting ) ? (
							<FollowButton event={ () => handleCancelRequest( profile?.uid ) } title="Solicitud enviada" icon={<IconUserWaiting />} otherClass="follow-warning500-color"/>
						) : (
							<FollowButton event={ () => handleNotFollowing( profile?.uid ) } title="Siguiendo" icon={<IconUserSelect />} otherClass="follow-success500-color"/>
						)

					)

				}
			</div>
		</div>
		) : (
			<SkeletonTopProfileFriend />
		)
	)
}

export default SectionTopProfileFriend;
