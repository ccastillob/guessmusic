
import React from 'react';

import CircleMessageChat from '../atoms/CircleMessageChat';
import CircleStatusUser from '../atoms/CircleStatusUser';

const ItemChatUser = ({chatActivo, setChatActivo, status}) => {

	const handleView = () => {
		setChatActivo(true);
	}

	return (
		// AQUI SE CAMBIARÁ LA CLASE SELECT SEGÚN EL CLICK DEL USUARIO
		<div onClick={ handleView } className={`container-item_userChat ${ chatActivo && "select"}`}>
			<div className="item-userChat_avatar">
				<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
				<CircleStatusUser status={status} />
			</div>
			<div className="item-userChat__data">
				<div className="data-content_top">
					<h4 className="text-bold text-overflow">Bumblebee</h4>
					<small className="text-bold">17:56</small>
				</div>
				<div className="data-content_bottom">
					<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
					{/* AQUI VA CAMBIAR SEGÚN LA RESPUESTA DEL BACKEND */}
					{
						!chatActivo && <CircleMessageChat />
					}
				</div>
			</div>
		</div>
	)
}

export default ItemChatUser;
