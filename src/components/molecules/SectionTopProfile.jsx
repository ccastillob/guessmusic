
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';
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

	return (
		( profileFollowings === undefined ) ? (
			// TODO: AGREGAR UN SKELETON
			<h1>SKELETON DE TOP PROFILE USER</h1>
		) : (
			<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">
				<div className="profileUser-container_left s-cols-12 m-cols-8">
					<div className="container-left_avatar s-order-2 m-order-1">

								<img src={ user?.imgAvatar } alt={ user?.username } />
								<div className="avatar__editImage">
									<i className="container-icon-editProfile">
										<IconEdit />
									</i>
								</div>

					</div>
					<div className="container-left_data s-order-1 m-order-2">
						<h3 className="content-color text-bold s-mb-1 text_line-clamp">{ user?.name }</h3>
						<h3 className="content-color text-bold s-mb-4 text_line-clamp">{ user?.lastName }</h3>
						<div className="data-content__createdAt s-mb-1">
							<i className="container-icon-dateProfile content-color">
								<IconDate />
							</i>
							{/* TODO: AGREGAR UNA FECHA */}
							<h4 className="content-color text_line-clamp">Se unió el 04/08/21</h4>
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
