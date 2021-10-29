
import React from 'react';

const CircleMessageChat = ({ num }) => {

	return (
		<div className="circle_getMesaage">
			<h6 className="title-color text-bold">{ num > 9 ? '+9' : num }</h6>
		</div>
	)
}

export default CircleMessageChat;
