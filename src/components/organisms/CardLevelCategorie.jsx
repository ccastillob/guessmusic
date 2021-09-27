
import React, { useRef } from "react";
import Slider from "react-slick";

import { arrowLeftVisible, arrowRightVisible } from "../../helpers/arrowCategorie";
import IconLeft from "../icons/IconLeft";
import IconRight from "../icons/IconRight";
import ItemLockedSong from "../molecules/ItemLockedSong";
import ItemUnlockedSong from "../molecules/ItemUnlockedSong";

const CardLevelCategorie = () => {

  const btnLeft = useRef(null);
  const btnRight = useRef(null);

  var settings = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  function SampleNextArrow({ onClick, currentSlide }) {

		arrowRightVisible({currentSlide, btnRight});

    return (
			<div ref={btnRight} onClick={ onClick } className="carousel-arrow carousel-arrow-right">
				<i className="container-icon-arrowCategorie">
					<IconRight />
				</i>
			</div>
    );
  }

  function SamplePrevArrow({ onClick, currentSlide }) {

		arrowLeftVisible({currentSlide, btnLeft});

    return (
			<div ref={btnLeft} onClick={ onClick } className="carousel-arrow carousel-arrow-left">
				<i className="container-icon-arrowCategorie">
					<IconLeft />
				</i>
			</div>
    );
  }

    return (
      <div className="ed-grid s-mb-0 s-cols-12 container-allCards_categorie">
				<div className="container-categorie_item">
					<h2 className="item__subtitle s-center">Nivel 1</h2>
				</div>
        <Slider className="carousel-grid" {...settings}>

          <ItemUnlockedSong listen="active" />

          <ItemLockedSong />

					<ItemUnlockedSong />
					<ItemUnlockedSong />
					<ItemUnlockedSong />
					<ItemUnlockedSong />
					<ItemUnlockedSong />
					<ItemUnlockedSong />
					<ItemUnlockedSong />
					<ItemUnlockedSong />

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://th.bing.com/th/id/OIP.Gwhyendklu2EONbsIW5dmwHaIK?pid=ImgDet&rs=1" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://th.bing.com/th/id/OIP.Era_XXX4zRdsbX3tVNekogHaEp?pid=ImgDet&rs=1" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://th.bing.com/th/id/R.6459a3555fa2e7bc52ce8a1a5680c9e3?rik=H4C0ep7xH3Uiww&pid=ImgRaw&r=0" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://artear-tn-prod.cdn.arcpublishing.com/resizer/v8AgXS6ssr4B5xlfnUKp1b3e27g=/767x0/smart/arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/25KUENDN3VJMLBHNNTNKOIMVIA.jpg" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://cdn-2.tstatic.net/wow/foto/bank/images/onerepublic.jpg" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://assets.tonica.la/__export/1599159292061/sites/debate/img/2020/09/03/nirvana-dave_grohl-kurt_cobain.jpg_242310155.jpg" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

          {/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://www.elculto.com.ar/wp-content/uploads/2019/05/skillet-2019.jpg" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

					{/* <div className="ed-grid s-grid-3 contenedor-item">
            <div className="img-container s-ratio-16-9 s-mb-2 s-cols-3 s-radius-1">
              <img alt="imagenes" src="https://mdmelectro.com/wp-content/uploads/2017/10/AlanWalker.jpg" />
              <div className="image-overlay">
								<i onClick={handlePlay} className="container-icon-playCategorieCard">
									<IconPlay />
								</i>
							</div>
            </div>
            <h4 className="s-center s-mb-1 s-cols-3">Artista</h4>
            <h5 className="s-center s-cols-3">Canción</h5>
          </div> */}

        </Slider>

      </div>
    );

}

export default CardLevelCategorie;
