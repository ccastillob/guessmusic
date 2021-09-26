
import React from 'react';
import FollowButton from '../atoms/FollowButton';

import GhostButton from '../atoms/GhostButton';
import PrimaryButton from '../atoms/PrimaryButton';
import IconDate from '../icons/IconDate';
import IconEdit from '../icons/IconEdit';
import IconFollow from '../icons/IconFollow';
import IconUserSelect from '../icons/IconUserSelect';

const SectionTopProfile = ({profile}) => {

	return (
		<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">
			<div className="profileUser-container_left s-cols-12 m-cols-8">
				<div className="container-left_avatar s-order-2 m-order-1">
					{
						profile ? (
							<>
							<img src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" alt="avatarProfile" />
							<div className="avatar__editImage">
								<i className="container-icon-editProfile">
									<IconEdit />
								</i>
							</div>
							</>
						) : (
							<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfile" />
						)
					}
				</div>
				<div className="container-left_data s-order-1 m-order-2">
					<h3 className="content-color text-bold s-mb-1 text_line-clamp">Optimus</h3>
					<h3 className="content-color text-bold s-mb-4 text_line-clamp">Prime</h3>
					<div className="data-content__createdAt s-mb-1">
						<i className="container-icon-dateProfile content-color">
							<IconDate />
						</i>
						<h4 className="content-color text_line-clamp">Se unió el 04/08/21</h4>
					</div>
					<div className="data-content__friends">
						<i className="container-icon-followProfile content-color">
							<IconFollow />
						</i>
						<h4 className="content-color text_line-clamp text_web">Siguiendo a 0 / 7 seguidores</h4>
						<h4 className="content-color text_line-clamp text_mobile">0 amigos</h4>
					</div>
				</div>
			</div>
			{
				profile ? (
					<div className="profileUser-container_right s-cols-12 m-cols-4">
						<PrimaryButton title="Editar perfil" otherClass="s-mb-2 m-mb-4"/>
						<GhostButton title="Cerrar sesión" otherClass="ghost-error300-color" />
					</div>
					) : (
						<div className="profileUser-container_right s-cols-12 m-cols-4">
						{/* <FollowButton title="Seguir" icon={<IconAddUserFollow />} otherClass="follow-primary-color"/> */}
						{/* <FollowButton title="Solicitud enviada" icon={<IconUserWaiting />} otherClass="follow-warning500-color"/> */}
						<FollowButton title="Siguiendo" icon={<IconUserSelect />} otherClass="follow-success500-color"/>
					</div>
					)

			}
		</div>
	)
}

export default SectionTopProfile;
