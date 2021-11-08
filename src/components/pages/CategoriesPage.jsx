
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useFetchUserCategorie } from "../../hooks/categorie/useFetchUserCategorie";
import FooterPlayingSong from "../molecules/FooterPlayingSong";
import FooterSelectSong from "../molecules/FooterSelectSong";
import HeaderMenu from "../molecules/HeaderMenu";
import CardLevelCategorie from "../organisms/CardLevelCategorie";
import SkeletonCategoriesPage from "../skeletons/SkeletonCategoriesPage";

const CategoriesPage = () => {

	const { uid } = useSelector(state => state.auth);
	const [songLevel, setSongLevel] = useState(null);
	const { data, loading } = useFetchUserCategorie(uid);

	// AL inicio el urlSong(en el componente Player) es undefined hasta que apretamos el boton play music
	const playerSong = (urlSong, imgUnlockedSong, nameSong, authorSong) => {
		setSongLevel({url: urlSong, imgSong: imgUnlockedSong, nameSong, authorSong})
	}

	return (

			loading ? (
				<SkeletonCategoriesPage />
			) : (

				<>
					<HeaderMenu active="categories" />
					<div className="ed-grid main-container container-categoriepage">
						<h1 className="title-color s-center">Categoria de canciones</h1>
						<h3 className="content-color s-center">Visualiza y escucha las canciones que acertaste en cada nivel.</h3>
						<div className="ed-grid s-grid-12">
							{/* TODO: APLICAR LAS CARDS PARA LAS CANCIONES */}

							{
								data.arrCategories.map( ( level, index ) =>
									<CardLevelCategorie key={ level._id } levels={ level } index={ index } playerSong={playerSong} />
								)
							}

						</div>
					</div>
					{
						songLevel !== null ? (
							<FooterPlayingSong songData={songLevel} />
						) : (
							<FooterSelectSong />
						)
					}
				</>

			)

    );

}

export default CategoriesPage;
