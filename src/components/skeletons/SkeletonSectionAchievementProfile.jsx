
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonSectionAchievementProfile = () => {

	return (
		<SkeletonTheme color="#8e8e8f">
			<div className="section-achievements s-cols-12">
				<h2 className="title-color s-mb-4">
					<Skeleton width={`20%`} />
				</h2>
				<div className="achievements-allItems">
					{
						Array(3).fill().map( (achiev, index) =>
							<div key={ index } className="container-item_achievement__complete">
								<i className="container-icon-achievementProfile primary-color">
									<Skeleton width={50} height={40} />
								</i>
								<div className="item-achievement__data__complete">
									<h4 className="content-color text-bold text-overflow">
										<Skeleton width={`50%`} />
									</h4>
									<h6 className="auxiliary-color text-overflow">
										<Skeleton width={`70%`} />
									</h6>
								</div>
							</div>
						)
					}
				</div>
				<div style={{ cursor: 'default' }} className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
					<h4 className="content-color text-bold">
						<Skeleton width={`40%`} />
					</h4>
					<i className="container-icon-arrowRightAchievement primary-color skeleton-noactions">
						<Skeleton width={20} height={20} />
					</i>
				</div>
			</div>
		</SkeletonTheme>
	)
}

export default SkeletonSectionAchievementProfile;
