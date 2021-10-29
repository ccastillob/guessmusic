
import React from 'react';

const OutgoingMessage = ({ msg }) => {

	return (
		<div className="container-item_conversation send s-cols-10">
			<h4 className="content-color">{ msg.userMessage }</h4>
			{/* TODO: FALTA ASIGNAR FECHA */}
			<small className="auxiliary-color">12/08/21 18:31</small>
		</div>
	)
}

export default OutgoingMessage;
