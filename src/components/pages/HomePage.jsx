
import React from 'react';

import CardLockedLevel from '../molecules/CardLockedLevel';
import CardUnlockedLevel from '../molecules/CardUnlockedLevel';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';

const HomePage = () => {

	return (
		<>

			<HeaderMenu active="play" />
			<div className="ed-grid main-container container-homepage">
				<h1 className="title-color s-center">Niveles</h1>
				<h3 className="content-color s-center">Completa los niveles, gana experiencia y consigue logros.</h3>
				<div className="ed-grid s-grid-12">
					{/* TODO: APLICAR NIVELES PARA EL USUARIO */}
					<CardUnlockedLevel />
					<CardLockedLevel />
				</div>
			</div>
			<FooterMenu active="play" />

		</>
	)
}

export default HomePage;
