
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Slider from 'react-slick';

import { useArrowConfig } from '../../hooks/useArrowConfig';
import SkeletonFooterSelectSong from './SkeletonFooterSelectSong';
import SkeletonHeaderMenu from './SkeletonHeaderMenu';

const SkeletonCategoriesPage = () => {

	const [ settings ] = useArrowConfig();

	return (
		<>
			<SkeletonHeaderMenu />
			<SkeletonTheme color="#8e8e8f" >
				<div className="ed-grid main-container container-categoriepage">
					<h1 className="title-color s-center">
						<Skeleton width={`40%`} />
					</h1>
					<h3 className="content-color s-center">
						<Skeleton width={`60%`} />
					</h3>
					<div className="ed-grid s-grid-12">
						{
							Array(8).fill().map( ( level, index ) =>
								<div key={ index } className="ed-grid s-mb-0 s-cols-12 container-allCards_categorie">
									<div className="container-categorie_item">
										<h2 className="item__subtitle s-center">
											<Skeleton width={80} />
										</h2>
									</div>
									<Slider className="carousel-grid" {...settings}>

										{

											Array(10).fill().map( (songs, indice) =>

												<div key={ indice } className="ed-grid s-grid-3 contenedor-item">
													<div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
														<Skeleton style={{ position: 'absolute' }} width={`100%`} height={`100%`} />
													</div>
													<h4 className="s-center s-mb-1 s-cols-3">
														<Skeleton width={`60%`} />
													</h4>
													<h5 className="s-center s-cols-3">
														<Skeleton width={`40%`} />
													</h5>
												</div>

											)

										}

									</Slider>

								</div>
							)
						}

					</div>
				</div>
			<SkeletonFooterSelectSong />
			</SkeletonTheme>
		</>
	)
}

export default SkeletonCategoriesPage;
