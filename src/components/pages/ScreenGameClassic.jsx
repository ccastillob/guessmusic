
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { myCorrects } from '../../helpers/myCorrects';
import CounterTimer from '../atoms/CounterTimer';
import Swal from 'sweetalert2';
import { ClassicSpinner, WaveSpinner } from 'react-spinners-kit';
// import map from 'lodash.map';

import PrimaryButton from '../atoms/PrimaryButton';
import PlayerGame from '../molecules/PlayerGame';
import ScreenFinishClassic from './ScreenFinishClassic';
import { activeToLevelNext, findAchievementsAndUpdatedConfirm, searchSongsAndUpdatedLevelsCompletes } from '../../helpers/confirmStatistics';

const ScreenGameClassic = ({ match }) => {

	const { categories } = useSelector(state => state.categorie);
	const { uid } = useSelector(state => state.auth);
	const { idLevel } = match.params;
	// Indice del nivel que ha seleccionado
	const indexLevelSong = categories?.findIndex( level => level._id === idLevel );

	const [showCounter, setShowCounter] = useState(false);
	const [songs, setsongs] = useState([]);
	const [lista, setLista] = useState(0);
	const [ejec, setEjec] = useState(false);
	const [incore, setIncore] = useState(false);
	const [score, setScore] = useState(0);
	const [cor, setCor] = useState([]);
	const ref = useRef(songs?.length);

	if( songs?.length !== 0 ){
		ref.current = songs?.length
	}

	useEffect(() => {
		const user = categories?.find( level => level._id === idLevel )
		const data = user?.dataSongs;
		setsongs(data)
	}, [ categories, idLevel ])

	const handleNext = async() => {

		Swal.fire({
				title: 'Cargando resultados...',
				text: 'Por favor espere...',
				allowOutsideClick: false,
				didOpen: () => {
						Swal.showLoading()
				}
		})

		await findAchievementsAndUpdatedConfirm( cor, songs, indexLevelSong )
		await searchSongsAndUpdatedLevelsCompletes(indexLevelSong, songs, uid)
		await activeToLevelNext(indexLevelSong, uid)

		// await dispatch( showAchievements() )
		Swal.close()
		setLista(lista+1)
	}

	const handleOption = (e) => {

		e.preventDefault()

		if(e.target.innerHTML === songs?.[lista]?.nameSong ){
				const datos = myCorrects(songs?.[lista]?.nameSong)
				setCor(datos)
				setEjec(true)
				setLista(lista+1)
		}else{
				setLista(lista+1)
				setIncore(true)
		}
	}

	// Si el usuario recarga la página en pleno juego
	if( songs === undefined ) {
		window.location.href = "/"
	}

	return (

		lista <= songs?.length ? (

			<div className="ed-container container-allSectionScreenGame">
				<PlayerGame showCounter={showCounter} setShowCounter= {setShowCounter} songData = {songs} idlist={ lista } inicie={ songs?.[lista]?.timeInitSong } />
				<div className="container-screenGame_header ed-grid s-grid-3">
					<div className="screenGame-item_mode">
						<h3 className="text-bold title-color s-center s-mb-1">Modo</h3>
						<h2 className="auxiliary-color s-center">Clásico</h2>
					</div>
					<div className="screenGame-item_time">
						<h3 className="text-bold title-color s-center s-mb-1">Tiempo</h3>
						<h1 className="auxiliary-color s-center">
						{ showCounter ? <CounterTimer setShowCounter={ setShowCounter } setIncore={setIncore} incore= {incore} total= {ref.current !== 0 && ref.current } lista={lista} setLista={ setLista } ejec={ ejec } setEjec={setEjec} setScore={setScore} score={score}/> :  '--'  }
						</h1>
					</div>
					<div className="screenGame-item_score">
						<h3 className="text-bold title-color s-center s-mb-1">Puntaje</h3>
						<h2 className="auxiliary-color s-center">{ score }</h2>
					</div>
				</div>
				<div className="container-screenGame_section ed-grid">
					<WaveSpinner color="#1b42d0" size={80} />

					{
						lista === songs?.length ? (
							<h1 className="content-color s-center">Juego terminado</h1>
						) : (
							<h1 className="content-color s-center">¿Qué canción esta sonando?</h1>
						)
					}

					{
						lista !== songs?.length && (
							<h2 className="content-color s-center">{ lista + 1 } / { songs?.length }</h2>
						)
					}

				</div>
				{
					lista === songs?.length ? (
						<div className="container-screenGame_footer btn-confirm-screengame ed-grid">
								<div className="screenGame-content_btnsTop ed-grid s-grid-1">
									<div className="btnsTop_left">
										<PrimaryButton event={ handleNext } title="OK" otherClass="s-center fzSmall-btn-confirm" />
									</div>
								</div>
						</div>
					) : (
						showCounter ? (

							<div className="container-screenGame_footer ed-grid">
								<div className="screenGame-content_btnsTop ed-grid s-grid-2">
									<div className="btnsTop_left">
										<PrimaryButton event={ handleOption } title={ songs?.[lista]?.optionSong1 } otherClass="s-center fzSmall-btn" />
									</div>
									<div className="btnsTop_right">
										<PrimaryButton event={ handleOption } title={ songs?.[lista]?.optionSong2 } otherClass="s-center fzSmall-btn" />
									</div>
								</div>
								<div className="screenGame-content_btnsBottom ed-grid s-grid-2">
									<div className="btnsBottom_left">
										<PrimaryButton event={ handleOption } title={ songs?.[lista]?.optionSong3 } otherClass="s-center fzSmall-btn" />
									</div>
									<div className="btnsBottom_right">
										<PrimaryButton event={ handleOption } title={ songs?.[lista]?.optionSong4 } otherClass="s-center fzSmall-btn" />
									</div>
								</div>
							</div>

						) : (
							<div className="container-screenGame_footer container-spinner ed-grid">
								<div className="screenGame-content_btnsTop ed-grid s-grid-1">
									<div className="content-button__continue">
										<ClassicSpinner color="#1b42d0" size={40} />
									</div>
								</div>
							</div>

						)
					)
				}

			</div>

		) : (
			<ScreenFinishClassic scoreFinal={ score } co={ cor } total={ songs } />
		)

	)
}

export default ScreenGameClassic;
