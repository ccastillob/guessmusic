
import React from 'react';

const ItemConfirmNotification = ({ notification }) => {

	const { userIDSendsNotification: user } = notification;

	return (
		<div className="container-item_request__confirm">
			<h4 className="content-color"><span className="text-bold">{ user.name } { user.lastName }</span> fue añadido a tu lista de seguidores.</h4>
		</div>
	)

}

export default ItemConfirmNotification;
