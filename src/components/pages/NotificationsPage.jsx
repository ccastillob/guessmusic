
import React from 'react';

import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';
import ItemConfirmNotification from '../molecules/ItemConfirmNotification';
import ItemPendingNotification from '../molecules/ItemPendingNotification';

const NotificationsPage = () => {

	return (
		<>
			<HeaderMenuSecondary active="notification"/>
			<div className="ed-grid  s-grid-12 container-notificationpage main-container">
				<div className="container-listRequest">
					<h2 className="title-color">Solicitudes</h2>
					{/* <ItemEmptyNotification /> */}

					<div className="listRequestFriend-allItems">

						<ItemPendingNotification />
						<ItemPendingNotification />
						<ItemPendingNotification />

						<ItemConfirmNotification />
						<ItemConfirmNotification />
						<ItemConfirmNotification />

					</div>
				</div>
			</div>
		</>
	)
}

export default NotificationsPage;
