
import React from "react";

import FooterPlayingSong from "../molecules/FooterPlayingSong";
// import FooterSelectSong from "../molecules/FooterSelectSong";
import HeaderMenu from "../molecules/HeaderMenu";
import CardLevelCategorie from "../organisms/CardLevelCategorie";

const CategoriesPage = () => {

    return (
      <>
				<HeaderMenu active="categories" />
				<div className="ed-grid main-container container-categoriepage">
					<h1 className="title-color s-center">Categoria de canciones</h1>
					<h3 className="content-color s-center">Visualiza y escucha las canciones que acertaste en cada nivel.</h3>
					<div className="ed-grid s-grid-12">
						{/* TODO: APLICAR LAS CARDS PARA LAS CANCIONES */}
						<CardLevelCategorie />
						<CardLevelCategorie />
						<CardLevelCategorie />
						<CardLevelCategorie />
						<CardLevelCategorie />
						<CardLevelCategorie />
						<CardLevelCategorie />
						<CardLevelCategorie />
					</div>
				</div>
				{/* <FooterSelectSong /> */}
				<FooterPlayingSong />
			</>
    );

}

export default CategoriesPage;
