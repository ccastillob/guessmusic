
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonHeaderMenuSecondary = () => {

	return (
		<SkeletonTheme color="#8e8e8f" >
			<header className={`secondary-header s-main-center`}>
				<div className="ed-grid">
					<div className="s-cross-center">
						<div className="s-to-left s-cross-center">
							<div className="menu-container-arrow s-cross-center skeleton-noactions">
								<i className="container-icon-arrowBackMenu content-color">
									<Skeleton width={`100%`} height={`70%`} />
								</i>
							</div>
						</div>
						<div className="s-to-right s-cross-center">
							<div className="menu-icons">
								<div className="menu-item-profile skeleton-noactions">
									<Skeleton style={{ position: 'absolute', borderRadius: "50%" }} width={`100%`} height={`100%`} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</SkeletonTheme>
	)
}

export default SkeletonHeaderMenuSecondary;
