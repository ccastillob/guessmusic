
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { scoreUpdated } from '../../helpers/scoreUpdated';

// import GhostButton from '../atoms/GhostButton';
import PrimaryButton from '../atoms/PrimaryButton';

const ScreenFinishClassic = ({ scoreFinal, co, total }) => {

	const history = useHistory();
	const { uid } = useSelector(state => state.auth);
	const allSongs = total?.length;
	const correctSongs = co?.length;
	const incorectSongs = (allSongs - correctSongs);

	const handleBackHome = async(e) => {

		e.preventDefault()

		Swal.fire({
				title: 'Redirect to home...',
				text: 'Please wait...',
				allowOutsideClick: false,
				didOpen: () => {
						Swal.showLoading()
				}
		})

		if( co?.length > 0 ){
				co.splice(0,co?.length)
		}

		const updScore = await scoreUpdated(scoreFinal, uid)

		if( updScore === undefined ){
				Swal.close()
				history.push("/")
		}

}

	return (
		<div className="ed-container container-allSectionScreenFinish">
			<div className="container-screenFinish_header ed-grid">
				<h1 className="title-color s-center">RESULTADOS FINALES</h1>
			</div>
			<div className="container-screenFinish_section ed-grid s-grid-2 rows-gap">
				<div className="screenFinish-item_correct">
					<div className="item_correct__content">
						<h2 className="title-color">Correctas:</h2>
						<h3 className="content-color">{ correctSongs }</h3>
					</div>
				</div>
				<div className="screenFinish-item_incorrect">
					<div className="item_incorrect__content">
						<h2 className="title-color">Incorrectas:</h2>
						<h3 className="content-color">{ incorectSongs }</h3>
					</div>
				</div>
				<div className="screenFinish-item_experience">
					<div className="item_experience__content">
						<h2 className="title-color">Experiencia:</h2>
						<h3 className="content-color">{ scoreFinal } EXP</h3>
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
				<div className="screenFinish-content_buttons ed-grid s-grid-1">
					{/* <div className="content-button__reset">
						<GhostButton urlTo={`/playing/${ idLevel }/classic`} title={`Reinténtalo`} otherClass="ghost-primary900-color s-center" />
					</div> */}
					<div className="content-button__continue">
						<PrimaryButton event={ handleBackHome } title="Continuar" otherClass="s-center" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScreenFinishClassic;
