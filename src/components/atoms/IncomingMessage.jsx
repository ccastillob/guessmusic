
import React from 'react';

const IncomingMessage = ({ msg }) => {

	return (
		<div className="container-item_conversation received s-cols-10">
			<h4 className="content-color">{ msg.userMessage }</h4>
			{/* TODO: FALTA ASIGNAR FECHA */}
			<small className="auxiliary-color">12/08/21 18:31</small>
		</div>
	)
}

export default IncomingMessage;
