
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ClassicSpinner } from 'react-spinners-kit';

const SkeletonAllListFollow = () => {

	return (
		<div className="container-listFollow">
		<SkeletonTheme color="#8e8e8f">
			<div className="container-listFollow">
				<h2 className="title-color">
					<Skeleton width={`40%`} />
				</h2>
				<div className="listFollow-allItems skeleton-noactions">
					<div className="container-item_friend__exist skeleton-spinner-friend skeleton-nobg">
						<ClassicSpinner color="#8e8e8f" size={30} />
					</div>
				</div>
			</div>
		</SkeletonTheme>
		</div>
	)
}

export default SkeletonAllListFollow;
