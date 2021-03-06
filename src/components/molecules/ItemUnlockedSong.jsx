
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IconPlay from '../icons/IconPlay';

const ItemUnlockedSong = ({ songs, playerSong }) => {

	const handlePlay = (e, music, imageAuthor, song, author) => {

		playerSong(music, imageAuthor, song, author);

		const allDocumentSongs = document.querySelectorAll('div.image-overlay');
		const divsArr = Array.from( allDocumentSongs);
		divsArr.filter( d => d.classList.remove('active') );

		const playElement = document.getElementById(e.target.id);
		const parentElement = playElement.parentElement;
		parentElement.classList.add('active');

  }

	return (
		<div className="ed-grid s-grid-3 contenedor-item">
			<div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
				<LazyLoadImage
					alt="imagenes"
					src={ songs.imgSong }
					effect="blur"
				/>
				<div className={`image-overlay`}>
					<i id={songs._id} onClick={(e) => handlePlay(e, songs.urlSong, songs.imgSong, songs.nameSong, songs.authorSong) } className="container-icon-playCategorieCard">
						<IconPlay id={songs._id} />
					</i>
				</div>
			</div>
			<h4 className="s-center s-mb-1 s-cols-3">{ songs.authorSong }</h4>
			<h5 className="s-center s-cols-3">{ songs.nameSong }</h5>
		</div>
	)

}

export default ItemUnlockedSong;
