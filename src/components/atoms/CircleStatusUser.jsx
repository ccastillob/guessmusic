
import React from 'react';

const CircleStatusUser = ({ status }) => {
	return (
		<div className={`avatar__statusCircle ${ status ? "online" : "offline" }`}></div>
	)
}

export default CircleStatusUser;
