
import React from 'react';
import { useSelector } from 'react-redux';

const CircleChat = () => {

	const { usuariosChat } = useSelector(state => state.chat);

	const data = usuariosChat?.filter( status => status.viewMessage === false )

	return (

		( data !== undefined && data?.length !== undefined && data?.length > 0 ) &&
			<h6 className="circle_chat">{ data?.length > 9 ? "9+" : data?.length }</h6>
	)
}

export default CircleChat;
