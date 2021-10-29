
import React from 'react';

import IconPlay from '../icons/IconPlay';

const ItemUnlockedSong = ({listen}) => {

	const handlePlay = () => {
		// TODO: FUNCIONALIDAD AL DARLE PLAY
    // console.log("click svg");
  }

	return (
		<div className="ed-grid s-grid-3 contenedor-item">
			<div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
				<img alt="imagenes" src="https://th.bing.com/th/id/OIP._3kQO8_h0aPkr7Q-_FRZ-gHaEK?w=333&h=187&c=7&o=5&pid=1.7" />
				<div className={`image-overlay ${ listen === "active" && "active"}`}>
					<i onClick={handlePlay} className="container-icon-playCategorieCard">
						<IconPlay />
					</i>
				</div>
			</div>
			<h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
			<h5 className="s-center s-cols-3">Canción</h5>
		</div>
	)
}

export default ItemUnlockedSong;
