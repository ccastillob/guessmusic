
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const PlayerGame = ({ songData, idlist, inicie, setShowCounter }) => {

	const [playing, setPlaying] = useState(false);
	const modo = 12;
	const referencia = React.createRef();

	const onProgress = data => {

		const hasta = inicie + modo;

		if(data.playedSeconds > hasta){
				setShowCounter(false)
				setPlaying(false)
		}

	}

	const musicStart = () => {
		setPlaying(true);
	}

	const onBufferEnd = e => {
		setShowCounter(true);
	}

	return (
		<ReactPlayer
				url= {songData?.[idlist]?.urlSong}
				className="react-player"
				width= '0'
				ref={referencia}
				height= '0'
				playing={playing}
				onProgress={e => onProgress(e) }
				onReady={() => musicStart() }
				onBufferEnd={onBufferEnd}
		/>
	)

}

export default PlayerGame;
