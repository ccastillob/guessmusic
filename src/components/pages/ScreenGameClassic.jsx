
import React from 'react';

import PrimaryButton from '../atoms/PrimaryButton';
import IconLogo from '../icons/IconLogo';

const ScreenGameClassic = () => {

	return (
		<div className="ed-container container-allSectionScreenGame">
			<div className="container-screenGame_header ed-grid s-grid-3">
				<div className="screenGame-item_mode">
					<h3 className="text-bold title-color s-center s-mb-1">Modo</h3>
					<h2 className="auxiliary-color s-center">Clásico</h2>
				</div>
				<div className="screenGame-item_time">
					<h3 className="text-bold title-color s-center s-mb-1">Tiempo</h3>
					<h1 className="auxiliary-color s-center">12 s</h1>
				</div>
				<div className="screenGame-item_score">
					<h3 className="text-bold title-color s-center s-mb-1">Puntaje</h3>
					<h2 className="auxiliary-color s-center">1200</h2>
				</div>
			</div>
			<div className="container-screenGame_section ed-grid">
				<i className="container-icon-logoScreenGame primary-color">
					<IconLogo />
				</i>
				<h1 className="content-color s-center">¿Qué canción esta sonando?</h1>
				<h2 className="content-color s-center">01 / 10</h2>
			</div>
			<div className="container-screenGame_footer ed-grid">
				<div className="screenGame-content_btnsTop ed-grid s-grid-2">
					<div className="btnsTop_left">
						<PrimaryButton title="una canción avanzada para prueba" otherClass="s-center fzSmall-btn" />
					</div>
					<div className="btnsTop_right">
						<PrimaryButton title="smile" otherClass="s-center fzSmall-btn" />
					</div>
				</div>
				<div className="screenGame-content_btnsBottom ed-grid s-grid-2">
					<div className="btnsBottom_left">
						<PrimaryButton title="hasta que te conoci" otherClass="s-center fzSmall-btn" />
					</div>
					<div className="btnsBottom_right">
						<PrimaryButton title="Welcome to the jungle" otherClass="s-center fzSmall-btn" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScreenGameClassic;
