
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ClassicSpinner } from 'react-spinners-kit';

import SkeletonHeaderMenuSecondary from './SkeletonHeaderMenuSecondary';

const SkeletonNotificationsPage = () => {

	return (
		<>
			<SkeletonHeaderMenuSecondary />
			<SkeletonTheme color="#8e8e8f" >
				<div className="ed-grid  s-grid-12 container-notificationpage main-container">
					<div className="container-listRequest">
						<h2 className="title-color">
							<Skeleton width={`32%`} />
						</h2>
						<div className="listRequestFriend-allItems skeleton-noactions">
								<div className="container-item_request__confirm skeleton-spinner-request skeleton-nobg">
									<h4 className="content-color">
										<ClassicSpinner color="#8e8e8f" size={30} />
									</h4>
								</div>
						</div>
					</div>
				</div>
			</SkeletonTheme>
		</>
	)
}

export default SkeletonNotificationsPage;
