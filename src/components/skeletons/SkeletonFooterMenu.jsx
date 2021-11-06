
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonFooterMenu = () => {

	return (
		<SkeletonTheme color="#8e8e8f" >
			<footer className="main-footer s-main-center">
				<div className="ed-grid s-grid-3 s-gap-1">
					<div className={`footer-item s-main-center s-cross-center skeleton-noactions`}>
						<i className={`container-icon-menu content-color`}>
							<Skeleton width={30} height={20} />
						</i>
						<small className={`text-footer-menu content-color`}>
							<Skeleton width={80} height={10} />
						</small>
					</div>
					<div className={`footer-item s-main-center s-cross-center skeleton-noactions`}>
						<i className={`container-icon-menu content-color`}>
							<Skeleton width={30} height={20} />
						</i>
						<small className={`text-footer-menu content-color`}>
							<Skeleton width={80} height={10} />
						</small>
					</div>
					<div className={`footer-item s-main-center s-cross-center skeleton-noactions`}>
						<i className={`container-icon-menu content-color`}>
							<Skeleton width={30} height={20} />
						</i>
						<small className={`text-footer-menu content-color`}>
							<Skeleton width={80} height={10} />
						</small>
					</div>
				</div>
			</footer>
		</SkeletonTheme>
	)
}

export default SkeletonFooterMenu;
