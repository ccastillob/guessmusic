
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SkeletonFooterMenu from './SkeletonFooterMenu';
import SkeletonHeaderMenu from './SkeletonHeaderMenu';

const SkeletonHomePage = () => {

	return (
		<>
			<SkeletonHeaderMenu />
			<SkeletonTheme color="#8e8e8f" >
				<div className="ed-grid main-container container-homepage">
					<h1 className="title-color s-center">
						<Skeleton width={`40%`} />
					</h1>
					<h3 className="content-color s-center">
						<Skeleton width={`60%`} />
					</h3>
					<div className="ed-grid s-grid-12">
						{
							Array(8).fill().map( ( levels, index ) =>

							<div key={ index } className={`ed-grid s-grid-2 m-gap-4 container-card_level skeleton-homepage s-mb-4`} >
								<div className="level__content-icon">
									<i className="container-icon-levelHome">
										<Skeleton width={100} height={80} />
									</i>
								</div>
								<div className="level__data-item">
									<h3 className="text-bold content-color s-center s-mb-4">
										<Skeleton width={100} />
									</h3>
									<h4 className="content-color s-center s-mb-2">
										<Skeleton width={40} />
									</h4>
									<h4 className="content-color s-center">
										<Skeleton width={80} />
									</h4>
								</div>
							</div>

							)
						}

					</div>
				</div>
				<SkeletonFooterMenu />
			</SkeletonTheme>
		</>
	)
}

export default SkeletonHomePage;
