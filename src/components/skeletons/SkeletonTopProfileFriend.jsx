
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonTopProfileFriend = () => {

	return (
		<div className="ed-grid s-grid-12 s-cols-12 skeleton-topprofile">
			<SkeletonTheme color="#8e8e8f">
			<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">
				<div className="profileUser-container_left s-cols-12 m-cols-8">
					<div className="container-left_avatar s-order-2 m-order-1 skeleton-noactions">
						<Skeleton style={{ position: 'absolute', borderRadius: "50%" }} width={`100%`} height={`100%`} />
					</div>
					<div className="container-left_data s-order-1 m-order-2">
						<h3 className="content-color text-bold s-mb-1 text_line-clamp">
							<Skeleton width={`100%`} />
						</h3>
						<h3 className="content-color text-bold s-mb-4 text_line-clamp">
							<Skeleton width={`90%`} />
						</h3>
						<div className="data-content__createdAt s-mb-1">
							<i className="container-icon-dateProfile content-color">
								<Skeleton width={20} height={12} />
							</i>
							<h4 className="content-color text_line-clamp">
								<Skeleton width={80} height={12} />
							</h4>
						</div>
						<div className="data-content__friends">
							<i className="container-icon-followProfile content-color">
								<Skeleton width={20} height={12} />
							</i>
							<h4 className="content-color text_line-clamp text_web">
								<Skeleton width={80} height={12} />
							</h4>
							<h4 className="content-color text_line-clamp text_mobile">
								<Skeleton width={80} height={12} />
							</h4>
						</div>
					</div>
				</div>
				<div className="profileUser-container_right s-cols-12 m-cols-4">
					<Skeleton width={100} height={36} />
				</div>
			</div>
			</SkeletonTheme>
		</div>
	)
}

export default SkeletonTopProfileFriend;
