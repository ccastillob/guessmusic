
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { startLogout } from '../../actions/auth';
import { updateUserData } from '../../actions/user';
import { storage } from '../../firebase/firebase-config';
import { getCreatedAt } from '../../helpers/getTime';
import GhostButton from '../atoms/GhostButton';
import PrimaryButton from '../atoms/PrimaryButton';
import IconDate from '../icons/IconDate';
import IconEdit from '../icons/IconEdit';
import IconFollow from '../icons/IconFollow';

const SectionTopProfile = () => {

	const dispatch = useDispatch();
	const { data: user, followings, followers } = useSelector(state => state.user);
	const arrProfileUserFollowings = followings?.filter( following => following.stateSubscription === true );
	const arrProfileUserFollowers = followers?.filter( follower => follower.stateSubscriber === true );
	const { followings: profileFollowings } = useSelector(state => state.otherProfile );

	const handleLogout = () => {

		dispatch( startLogout() );

	}

	const handleChangeFile = ({ target }) => {

		const file = target.files[0]

		if( file !== undefined ) {

			const pattern = /image-*/;

			if( file.size > 5000000 ) {
				return Swal.fire( '', 'La imagen debe ser menor a 5Mb', 'error' );
			}

			if( !file.type.match( pattern ) ) {
				return Swal.fire( '', 'Formato no válido', 'error' );
			}

			const metadata = {
				contentType: 'image/*'
			}

			const storageRef = storage.ref(`/profileImages/${ user?.uid }/${ file.name }`);
			const uploadTask = storageRef.put( file, metadata );

			uploadTask.on( 'state_changed', ( snapshot ) => {

				let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;

				if( percentage < 100 ) {
					Swal.fire({
						title: 'Subiendo imagen',
						text: 'Por favor espere...',
						allowOutsideClick: false,
						didOpen: () => {
								Swal.showLoading()
						}
					})
				}else {
					Swal.close();
				}

			}, ( error ) => {

				console.log(error);

			}, () => {

				uploadTask.snapshot.ref.getDownloadURL().then( url => {

					const objectUserDataUpdate = {
						lastName: user?.lastName,
						name: user?.name,
						username: user?.username,
						imgAvatar: url
					}

					dispatch( updateUserData( user?.uid, objectUserDataUpdate ) );

					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Imagen subida',
						showConfirmButton: false,
						timer: 1500
					})

				})

			})

		}

	}

	return (
		( profileFollowings === undefined ) ? (
			// TODO: AGREGAR UN SKELETON
			<h1>SKELETON DE TOP PROFILE USER</h1>
		) : (
			<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">
				<div className="profileUser-container_left s-cols-12 m-cols-8">
					<div className="container-left_avatar s-order-2 m-order-1">

								<img src={ user?.imgAvatar } alt={ user?.username } />
								<label htmlFor="editAvatar" className="avatar__editImage">
									<i className="container-icon-editProfile">
										<IconEdit />
									</i>
								</label>
								<input onChange={ handleChangeFile } type="file" accept=".png, .jpg, .jpeg" style={{ display: 'none' }} name="profile" id="editAvatar"></input>
					</div>
					<div className="container-left_data s-order-1 m-order-2">
						<h3 className="content-color text-bold s-mb-1 text_line-clamp">{ user?.name }</h3>
						<h3 className="content-color text-bold s-mb-4 text_line-clamp">{ user?.lastName }</h3>
						<div className="data-content__createdAt s-mb-1">
							<i className="container-icon-dateProfile content-color">
								<IconDate />
							</i>
							<h4 className="content-color text_line-clamp">Se unió el { getCreatedAt( user?.createdAt ) }</h4>
						</div>
						<div className="data-content__friends">
							<i className="container-icon-followProfile content-color">
								<IconFollow />
							</i>
							<h4 className="content-color text_line-clamp text_web">{`Siguiendo a ${ arrProfileUserFollowings?.length } / ${ arrProfileUserFollowers?.length } ${ arrProfileUserFollowers?.length === 1 ? "seguidor" : "seguidores"}`}</h4>
							<h4 className="content-color text_line-clamp text_mobile">{`${ arrProfileUserFollowings?.length } ${ (arrProfileUserFollowings?.length === 1) ? "amigo" : "amigos"}`}</h4>
						</div>
					</div>
				</div>

				<div className="profileUser-container_right s-cols-12 m-cols-4">
					<PrimaryButton title="Editar perfil" otherClass="s-mb-2 m-mb-4"/>
					<GhostButton event={ handleLogout } title="Cerrar sesión" otherClass="ghost-error300-color" />
				</div>

			</div>
		)
	)
}

export default SectionTopProfile;
