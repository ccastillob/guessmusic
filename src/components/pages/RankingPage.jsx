
import React from 'react';

import ArrowsRanking from '../molecules/ArrowsRanking';
import CardItemRanking from '../molecules/CardItemRanking';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import ItemDivitionRanking from '../molecules/ItemDivitionRanking';

const RankingPage = () => {

	return (
		<>
			<HeaderMenu active="ranking" />
			<div className="ed-grid main-container container-rankingpage">
				<h1 className="title-color s-center">Lista de clasificación</h1>
				<h3 className="content-color s-center">Gana experiencia y ocupa el primer lugar en la lista.</h3>
				<div className="ed-grid s-grid-12">

					<div className="container-sectionCards_ranking s-order-2 m-order-1">
						<div className="container-allItemCards_ranking">
							<CardItemRanking status="active" />
							<CardItemRanking />
							<CardItemRanking />
							<CardItemRanking />
							<CardItemRanking />
						</div>
						<ArrowsRanking />
					</div>

					<ItemDivitionRanking />
				</div>
			</div>
			<FooterMenu active="ranking" />
		</>
	)
}

export default RankingPage;
