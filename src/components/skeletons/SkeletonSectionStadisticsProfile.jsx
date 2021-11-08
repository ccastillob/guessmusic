
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonSectionStadisticsProfile = () => {

	return (
		<SkeletonTheme color="#8e8e8f">
			<div className="section-stadistics s-mb-4">
				<h2 className="title-color s-mb-4">
					<Skeleton width={`30%`} />
				</h2>

						<div className="stadistics-allItems ed-grid s-grid-2 m-grid-2">
					<div className="item-experience">
						<i className="container-icon-experienceProfile primary-color s-mr-2">
							<Skeleton width={20} height={28} />
						</i>
						<div className="experience__data">
							<h4 className="content-color text-bold s-mb-1">
								<Skeleton width={50} />
							</h4>
							<h6 className="auxiliary-color">
								<Skeleton width={70} />
							</h6>
						</div>
					</div>
					<div className="item-divition">
						<i className={`container-icon-shieldProfile divition s-mr-2`}>
							<Skeleton width={20} height={28} />
						</i>
						<div className="divition__data">
							<h4 className="content-color text-bold s-mb-1">
								<Skeleton width={50} />
							</h4>
							<h6 className="auxiliary-color">
								<Skeleton width={70} />
							</h6>
						</div>
					</div>
				</div>
			</div>
		</SkeletonTheme>
	)
}

export default SkeletonSectionStadisticsProfile;
