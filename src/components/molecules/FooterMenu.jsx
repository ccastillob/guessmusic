import React from 'react'
import IconCategories from '../icons/IconCategories';
import IconPlay from '../icons/IconPlay';
import IconRanking from '../icons/IconRanking';
import IconVersus from '../icons/IconVersus';

const FooterMenu = () => {
	return (
		<footer className="main-footer s-main-center">
			<div className="ed-grid s-grid-4 s-gap-1">
				<div className={`footer-item s-main-center s-cross-center `}>
					<i className="container-icon-menu content-color active">
						<IconPlay />
					</i>
					<small className="text-footer-menu content-color active">Jugar</small>
				</div>
				<div className={`footer-item s-main-center s-cross-center `}>
					<i className="container-icon-menu content-color">
						<IconRanking />
					</i>
					<small className="text-footer-menu content-color">Clasificación</small>
				</div>
				<div className={`footer-item s-main-center s-cross-center `}>
					<i className="container-icon-menu content-color">
						<IconCategories />
					</i>
					<small className="text-footer-menu content-color">Categorias</small>
				</div>
				<div className={`footer-item s-main-center s-cross-center `}>
					<i className="container-icon-menu content-color">
						<IconVersus />
					</i>
					<small className="text-footer-menu content-color">Batalla</small>
				</div>
			</div>
		</footer>
	)
}

export default FooterMenu;
