
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useFetchAllUsersRanking } from '../../hooks/user/useFetchAllUsersRanking';
import ArrowsRanking from '../molecules/ArrowsRanking';
import CardItemRanking from '../molecules/CardItemRanking';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import ItemDivitionRanking from '../molecules/ItemDivitionRanking';
import SkeletonRankingPage from '../skeletons/SkeletonRankingPage';

const RankingPage = () => {

	const { uid } = useSelector(state => state.auth);
	const [ page, setPage ] = useState(0);
	const { data, totalPages, loading } = useFetchAllUsersRanking( page );
	const [view, setView] = useState(false)

	useEffect(() => {

		setView( true )

	}, [ data ])

	return (

		( view !== false && loading !== true ) ? (
			<>
				<HeaderMenu active="ranking" />
				<div className="ed-grid main-container container-rankingpage">
					<h1 className="title-color s-center">Lista de clasificación</h1>
					<h3 className="content-color s-center">Gana experiencia y ocupa el primer lugar en la lista.</h3>
					<div className="ed-grid s-grid-12">

						{
								<div className="container-sectionCards_ranking s-order-2 m-order-1">
									<div className="container-allItemCards_ranking">
										{
											data?.map( (user, i) =>
												<CardItemRanking key={ user.uid } page={ page } position={ i } status={`${ user.uid === uid && "active" }`} user={ user } />
											)
										}
									</div>
									<ArrowsRanking page={ page } setPage={ setPage } setView={ setView } totalPages={ totalPages } />
								</div>

						}

						<ItemDivitionRanking />
					</div>
				</div>
				<FooterMenu active="ranking" />
			</>

		) : (
			<SkeletonRankingPage />
		)

	)
}

export default RankingPage;
