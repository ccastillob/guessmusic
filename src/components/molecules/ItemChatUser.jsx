
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { startProfileFollowings } from '../../actions/profile';
import { SocketContext } from '../../context/SocketContext';
import { fetchConToken } from '../../helpers/fetch';
import { getHour } from '../../helpers/getTime';
import { scrollToBottom } from '../../helpers/scrollToBottom';
import { types } from '../../types/types';
import CircleMessageChat from '../atoms/CircleMessageChat';
import CircleStatusUser from '../atoms/CircleStatusUser';

const ItemChatUser = ({ friend }) => {

	const dispatch = useDispatch();
	const { chatActivo } = useSelector(state => state.chat);
	const { uid } = useSelector(state => state.auth);
	const { socket } = useContext( SocketContext );

	const handleView = async() => {

		dispatch({
			type: types.activeChat,
			payload: friend.userFor
		})

		dispatch( startProfileFollowings( friend.username ) );

		const resp = await fetchConToken(`message/${friend.userFor}`);
		const body = await resp.json();

		dispatch({
			type: types.loadingMessages,
			payload: body.message
		})

		scrollToBottom('messages-chat');

		socket.emit( 'load-latest-messages', { uid } );


	}

	return (

		<div onClick={ handleView } className={`container-item_userChat ${ (friend.userFor === chatActivo) && "select" }`}>
			<div className="item-userChat_avatar">
				<img src={ friend.imgAvatar } alt={ friend.username } />
				<CircleStatusUser status={friend.online} />
			</div>
			<div className="item-userChat__data">
				<div className="data-content_top">
					<h4 className="text-bold text-overflow">{ friend.name }</h4>
					<small className="text-bold">{ getHour( friend?.createdAt ) }</small>
				</div>
				<div className="data-content_bottom">
					<small className="text-overflow">{ friend.userMessage }</small>
					{
						( !friend.viewMessage )
						&& <CircleMessageChat num={ friend.totalMessageNotView } />
					}
				</div>
			</div>
		</div>
	)
}

export default ItemChatUser;
