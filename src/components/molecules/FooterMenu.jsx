
import React from 'react';
import { NavLink } from 'react-router-dom';

import IconCategories from '../icons/IconCategories';
import IconPlay from '../icons/IconPlay';
import IconRanking from '../icons/IconRanking';
// import IconVersus from '../icons/IconVersus';

const FooterMenu = ({active}) => {

	return (
		<footer className="main-footer s-main-center">
			{/* <div className="ed-grid s-grid-4 s-gap-1"> */}
			<div className="ed-grid s-grid-3 s-gap-1">
				<NavLink to="/" className={`footer-item s-main-center s-cross-center `}>
					<i className={`${active === "play" && "active"} container-icon-menu content-color`}>
						<IconPlay />
					</i>
					<small className={`${active === "play" && "active"} text-footer-menu content-color`}>Jugar</small>
				</NavLink>
				<NavLink to="/ranking" className={`footer-item s-main-center s-cross-center `}>
					<i className={`${active === "ranking" && "active"} container-icon-menu content-color`}>
						<IconRanking />
					</i>
					<small className={`${active === "ranking" && "active"} text-footer-menu content-color`}>Clasificación</small>
				</NavLink>
				<NavLink to="/categories" className={`footer-item s-main-center s-cross-center `}>
					<i className={`${active === "categories" && "active"} container-icon-menu content-color`}>
						<IconCategories />
					</i>
					<small className={`${active === "categories" && "active"} text-footer-menu content-color`}>Categorias</small>
				</NavLink>
				{/* <NavLink to="/" className={`footer-item s-main-center s-cross-center `}>
					<i className={`${active === "battle" && "active"} container-icon-menu content-color`}>
						<IconVersus />
					</i>
					<small className={`${active === "battle" && "active"} text-footer-menu content-color`}>Batalla</small>
				</NavLink> */}
			</div>
		</footer>
	)
}

FooterMenu.defaultProps = {
	active: ""
}

export default FooterMenu;
