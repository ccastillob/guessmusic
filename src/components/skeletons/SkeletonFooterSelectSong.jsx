
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonFooterSelectSong = () => {

	return (
		<SkeletonTheme color="#8e8e8f" >
			<footer className="player-footer s-main-center skeleton-categoriepage">
			<div className="ed-grid s-cross-center s-py-2">
				<h1 className="dataplayer__title s-center">
					<Skeleton width={`70%`} />
				</h1>
			</div>
		</footer>
		</SkeletonTheme>
	)
}

export default SkeletonFooterSelectSong;
