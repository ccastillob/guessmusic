
import React from 'react';

import GhostButton from '../atoms/GhostButton';
import PrimaryButton from '../atoms/PrimaryButton';

const ItemPendingNotification = () => {

	return (
		<div className="container-item_request">
			<h4 className="content-color text-justify"><span className="text-bold">Bumblebee</span> te ha mandado una solicitud para seguirte. ¿Deseas añadirlo a tu lista de amigos?</h4>
			<div className="container-buttons__request">
				<PrimaryButton title="Si, añadir" otherClass="s-mr-4"/>
				<GhostButton title="No" otherClass="ghost-error300-color"/>
			</div>
		</div>
	)
}

export default ItemPendingNotification;
