import React from 'react'
import GhostButton from '../atoms/GhostButton'
import PrimaryButton from '../atoms/PrimaryButton'

const ScreenFinishClassic = () => {
	return (
		<div className="ed-container container-allSectionScreenFinish">
			<div className="container-screenFinish_header ed-grid">
				<h1 className="title-color s-center">RESULTADOS FINALES</h1>
			</div>
			<div className="container-screenFinish_section ed-grid s-grid-2 rows-gap">
				<div className="screenFinish-item_correct">
					<div className="item_correct__content">
						<h2 className="title-color">Correctas:</h2>
						<h3 className="content-color">10</h3>
					</div>
				</div>
				<div className="screenFinish-item_incorrect">
					<div className="item_incorrect__content">
						<h2 className="title-color">Incorrectas:</h2>
						<h3 className="content-color">0</h3>
					</div>
				</div>
				<div className="screenFinish-item_experience">
					<div className="item_experience__content">
						<h2 className="title-color">Experiencia:</h2>
						<h3 className="content-color">240 EXP</h3>
					</div>
				</div>
				<div className="screenFinish-item_performance">
						<div className="item_performance__content">
							<h2 className="title-color">Eficiencia:</h2>
							<h3 className="content-color">Excelente</h3>
						</div>
				</div>
			</div>
			<div className="container-screenFinish_footer ed-grid">
				<div className="screenFinish-content_buttons ed-grid s-grid-2">
					<div className="content-button__reset">
						<GhostButton title={`Reinténtalo(${1})`} otherClass="ghost-primary900-color s-center" />
					</div>
					<div className="content-button__continue">
						<PrimaryButton title="Continuar" otherClass="s-center" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScreenFinishClassic
