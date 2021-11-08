
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ClassicSpinner } from 'react-spinners-kit';

const SkeletonSectionFriendProfile = () => {
	return (
		<div className="section-friends s-cols-12 m-cols-5 m-x-8 skeleton-sectionfriendprofile">
			<SkeletonTheme color="#8e8e8f">
				<div className="section-friends s-cols-12 m-cols-5 m-x-8">
					<h2 className="title-color s-mb-4">
						<Skeleton width={80} />
					</h2>

					<div className="friends-following s-mb-4">
						<div className="title-header__friends">
							<h3 className="content-color text-bold">
								<Skeleton width={100} />
							</h3>
						</div>

						<div className="friends-allItems">
							<div className="container-item_friend__exist skeleton-spinner-friend">
								<ClassicSpinner color="#8e8e8f" size={30} />
							</div>
						</div>

					</div>

					<div className="friends-followers">
						<div className="title-header__friends">
							<h3 className="content-color text-bold">
								<Skeleton width={100} />
							</h3>
						</div>

						<div className="friends-allItems">
							<div className="container-item_friend__exist skeleton-spinner-friend">
								<ClassicSpinner color="#8e8e8f" size={30} />
							</div>
						</div>

					</div>

				</div>
			</SkeletonTheme>
		</div>
	)
}

export default SkeletonSectionFriendProfile;
