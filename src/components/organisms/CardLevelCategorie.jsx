
import React from "react";
import Slider from "react-slick";

import { useArrowConfig } from "../../hooks/useArrowConfig";
import ItemLockedSong from "../molecules/ItemLockedSong";
import ItemUnlockedSong from "../molecules/ItemUnlockedSong";

const CardLevelCategorie = ({ levels, index, playerSong }) => {

	const { dataSongs } = levels;
	const [ settings ] = useArrowConfig();

	return (
		<div className="ed-grid s-mb-0 s-cols-12 container-allCards_categorie">
			<div className="container-categorie_item">
				<h2 className="item__subtitle s-center">Nivel { index + 1 }</h2>
			</div>
			<Slider className="carousel-grid" {...settings}>

				{

					dataSongs.map( songs =>
						songs.stateSong
							? <ItemUnlockedSong key={ songs._id } songs={ songs } playerSong={ playerSong } />
							: <ItemLockedSong key={ songs._id } />
					)

				}

			</Slider>

		</div>
	)

}

export default CardLevelCategorie;
