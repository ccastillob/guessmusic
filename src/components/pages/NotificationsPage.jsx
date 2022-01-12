
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearNotifications, loadingNotifications } from '../../actions/notification';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';
import ItemConfirmNotification from '../molecules/ItemConfirmNotification';
import ItemEmptyNotification from '../molecules/ItemEmptyNotification';
import ItemPendingNotification from '../molecules/ItemPendingNotification';
import SkeletonNotificationsPage from '../skeletons/SkeletonNotificationsPage';

const NotificationsPage = () => {

	const dispatch = useDispatch();
	const { uid } = useSelector( state => state.auth );
	const { notifications } = useSelector( state => state.notification );

	useEffect(() => {

		dispatch( clearNotifications() );
		dispatch( loadingNotifications(uid) );

	}, [ dispatch, uid ])

	return (

		( notifications !== null ) ? (

			<>
				<HeaderMenuSecondary active="notification"/>
				<div className="ed-grid  s-grid-12 container-notificationpage main-container">
					<div className="container-listRequest">
						<h2 className="title-color">Solicitudes</h2>
						{

							( notifications.length === 0 ) ? (

								<ItemEmptyNotification />

							) : (
								<div className="listRequestFriend-allItems">
								{
									notifications?.map( notification => (
										(notification.stateNotification)
										? <ItemConfirmNotification key={ notification._id } notification={ notification } />
										: <ItemPendingNotification key={ notification._id } notification={ notification } />
									))
								}
								</div>

							)

						}
					</div>
				</div>
			</>

		) : (
			<SkeletonNotificationsPage />
		)

	)

}

export default NotificationsPage;
