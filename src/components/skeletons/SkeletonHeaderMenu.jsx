
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonHeaderMenu = () => {

	return (
		<SkeletonTheme color="#8e8e8f" >
			<header className="main-header s-main-center" >
				<div className="ed-grid">
					<div className="s-cross-center">
						<div className="s-to-left s-cross-center">
							<div className="menu-container-logo s-cross-center skeleton-noactions">
								<i className="container-icon-logo">
									<Skeleton width={80} height={20} />
								</i>
							</div>
							<div className="menu-container">
								<div className="menu-list m-mr-2 skeleton-noactions">
									<i className={`container-icon-menu content-color`}>
										<Skeleton width={20} height={20} />
									</i>
									<h4 className={`content-color`}>
										<Skeleton width={50} height={20} />
									</h4>
								</div>
								<div className="menu-list m-mr-2 skeleton-noactions">
									<i className={`container-icon-menu content-color`}>
										<Skeleton width={20} height={20} />
									</i>
									<h4 className={`content-color`}>
										<Skeleton width={50} height={20} />
									</h4>
								</div>
								<div className="menu-list m-mr-2 skeleton-noactions">
									<i className={`container-icon-menu content-color`}>
										<Skeleton width={20} height={20} />
									</i>
									<h4 className={`content-color`}>
										<Skeleton width={50} height={20} />
									</h4>
								</div>
							</div>
						</div>
						<div className="s-to-right s-cross-center">
							<div className="menu-icons">
								<div className="menu-item-icon skeleton-noactions">
									<i className={`container-icon-nav content-color`}>
										<Skeleton width={`100%`} height={`70%`} />
									</i>
								</div>
								<div className="menu-item-icon skeleton-noactions">
									<i className={`container-icon-nav content-color`}>
										<Skeleton width={`100%`} height={`70%`} />
									</i>
								</div>
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

export default SkeletonHeaderMenu;
