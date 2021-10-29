
import React from 'react';
import { getDateMessage } from '../../helpers/getTime';

const IncomingMessage = ({ msg }) => {

	return (
		<div className="container-item_conversation received s-cols-10">
			<h4 className="content-color">{ msg.userMessage }</h4>
			<small className="auxiliary-color">{ getDateMessage( msg?.createdAt ) }</small>
		</div>
	)
}

export default IncomingMessage;
