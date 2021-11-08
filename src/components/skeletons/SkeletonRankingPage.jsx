
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SkeletonFooterMenu from './SkeletonFooterMenu';
import SkeletonHeaderMenu from './SkeletonHeaderMenu';

const SkeletonRankingPage = () => {

	return (
		<>
			<SkeletonHeaderMenu />
			<SkeletonTheme color="#8e8e8f" >
				<div className="ed-grid main-container container-rankingpage">
						<h1 className="title-color s-center">
							<Skeleton width={90} />
						</h1>
						<h3 className="content-color s-center">
							<Skeleton width={`60%`} />
						</h3>
						<div className="ed-grid s-grid-12">

							<div className="container-sectionCards_ranking s-order-2 m-order-1">
								<div className="container-allItemCards_ranking">
									{
										Array(5).fill().map( (user, i) =>
										<div key={ i } className={`ed-grid s-grid-7 s-cols-7 m-gap-4 container-card_ranking skeleton-rankingpage s-mb-4 s-py-4`} >
											<h4 className="ranking__number content-color s-cols-1">
												<Skeleton width={`50%`} />
											</h4>
											<div className="ranking__data s-cols-4">
												<div className="data-item__userRanking">
													<Skeleton style={{ position: 'absolute', borderRadius: "50%" }} width={`100%`} height={`100%`} />
												</div>
												<div className="data-item__sectionRanking">
													<h4 className="sectionRanking__user content-color text_line-clamp">
														<Skeleton width={100} />
													</h4>
													<div className={`sectionRanking__content_divition s-cross-center primary-color divition`}>
														<i className={`container-icon-shieldCard`}>
															<Skeleton width={12} height={11} />
														</i>
														<small className="text_line-clamp">
															<Skeleton width={50} />
														</small>
													</div>
												</div>
											</div>
											<h4 className="ranking__experience content-color s-cols-2 s-right">
												<Skeleton width={50} />
											</h4>
										</div>
										)
									}
								</div>

								<div className="ed-grid s-grid-2 m-gap-2 container-arrows_ranking">
									<div className="ranking__content-left s-cross-center">
										<div className={`content-left__item skeleton-rankingpage`}>
											<i className="container-icon-arrowLeftRanking skeleton-noactions">
												<Skeleton width={`100%`} height={`80%`} />
											</i>
										</div>
									</div>
									<div className="ranking__content-right s-cross-center">
										<div className={`content-right__item skeleton-rankingpage`}>
											<i className="container-icon-arrowRightRanking skeleton-noactions">
												<Skeleton width={`100%`} height={`80%`} />
											</i>
										</div>
									</div>
								</div>

							</div>

							<div className="container-listDivition s-order-1 m-order-2">
								<h2 className="title-color s-mb-4 s-px-4 s-center">
									<Skeleton width={`40%`} />
								</h2>
								<div className="listDivition-allItems">

									<div className="container-item_divition s-cross-center heraldo-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

									<div className="container-item_divition s-cross-center guardian-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

									<div className="container-item_divition s-cross-center cruzado-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

									<div className="container-item_divition s-cross-center arconte-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

									<div className="container-item_divition s-cross-center leyenda-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

									<div className="container-item_divition s-cross-center ancestral-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

									<div className="container-item_divition s-cross-center divino-divition">
										<i className="container-icon-shieldRanking">
											<Skeleton width={24} height={24} />
										</i>
										<h4 className="text-bold">
											<Skeleton width={90} />
										</h4>
										<small className="content-color s-to-right">
											<Skeleton width={40} />
										</small>
									</div>

								</div>
							</div>

						</div>
				</div>
			<SkeletonFooterMenu />
			</SkeletonTheme>
		</>
	)
}

export default SkeletonRankingPage;
