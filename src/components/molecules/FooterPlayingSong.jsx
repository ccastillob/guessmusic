
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import IconPause from '../icons/IconPause';

import IconPlay from '../icons/IconPlay';

const FooterPlayingSong = ({ songData }) => {

	const [playing, setPlaying] = useState(false);
	const [playedSeconds, setPlayedSeconds] = useState(0);
	const [totalSeconds, setTotalSeconds] = useState(0);

	useEffect(() => {

		if( songData?.url ) {
			onStart();
		}

	}, [ songData ]);

	const onStart = () => {
		setPlaying(true)
	};

	const onPause = () => {
		setPlaying(false)
	}

	const onProgress = data => {

		// data.playedSeconds = numero que se va seguir aumentando(segundos de la cancion)
		// playedSeconds = segundos donde empieza la cancion
		setPlayedSeconds(data.playedSeconds)
		setTotalSeconds(data.loadedSeconds)

	}

	const porcentaje = () => {
		let porcen = (playedSeconds/totalSeconds)*100;
		return porcen;
	}

	return (
		<footer className="player-footer s-main-center">
			<div className="ed-grid s-py-2">
				<div className="s-cross-center">
					<div className="container-group_data">
						<div className="data-item__artist">
							<img alt="artist" src={ songData?.imgSong } />
						</div>
						<div className="data-item__section">
							<h4 className="section__artist title-color text_line-clamp">{ songData?.authorSong }</h4>
							<div className="section__progress_content">
								<div style={{width: `${ ( !isNaN(porcentaje()) ) ? porcentaje() : 0 }%`}} className="progress_barPercentage"></div>
							</div>
							<h6 className="section_song title-color text_line-clamp">{ songData?.nameSong }</h6>
						</div>
					</div>
					{
						playing ? (
							<div onClick={ onPause } className="container-group_icon">
								<i className="container-icon-playSong">
									<IconPause />
								</i>
							</div>
						) : (
							<div onClick={ onStart } className="container-group_icon">
								<i className="container-icon-playSong">
									<IconPlay />
								</i>
							</div>
						)
					}

				</div>
			</div>
			<ReactPlayer
					url= {songData?.url}
					className="react-player"
					width= '0'
					height= '0'
					playing={playing}
					onProgress={e => onProgress(e) }
			/>
		</footer>
	)
}

export default FooterPlayingSong;
