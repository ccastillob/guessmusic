
import React from 'react';
import { getDateMessage } from '../../helpers/getTime';

const OutgoingMessage = ({ msg }) => {
	return (
		<div className="container-item_conversation send s-cols-10">
			<h4 className="content-color">{ msg.userMessage }</h4>
			<small className="auxiliary-color">{ getDateMessage( msg?.createdAt ) }</small>
		</div>
	)
}

export default OutgoingMessage;
