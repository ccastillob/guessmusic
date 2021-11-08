
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ClassicSpinner } from 'react-spinners-kit';

import SkeletonHeaderMenuSecondary from './SkeletonHeaderMenuSecondary';

const SkeletonListAchievementsPage = () => {

	return (
		<>
			<SkeletonHeaderMenuSecondary />
			<SkeletonTheme color="#8e8e8f" >
				<div className="ed-grid s-grid-12 container-achievementpage main-container">
					<div className="container-listAchievement">
						<h2 className="title-color">
							<Skeleton width={`32%`} />
						</h2>
						<div className="listAchievement-allItems">
							<div className="container-item_listAchievement__complete skeleton-spinner-achievement">
								<ClassicSpinner color="#8e8e8f" size={30} />
							</div>
						</div>
					</div>
				</div>
			</SkeletonTheme>
		</>
	)
}

export default SkeletonListAchievementsPage;
