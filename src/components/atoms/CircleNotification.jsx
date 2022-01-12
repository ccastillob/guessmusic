
import React from 'react';
import { useSelector } from 'react-redux';

const CircleNotification = () => {

	const { notifications } = useSelector(state => state.notification);
	const data = notifications?.filter( status => status.viewNotification === false );

	return (

		( data !== undefined && data?.length !== undefined && data?.length > 0 )
		&& <h6 className="circle_notification">{ data?.length > 9 ? "9+" : data?.length }</h6>
	)

}

export default CircleNotification;
