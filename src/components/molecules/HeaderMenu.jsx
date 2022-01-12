
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import CircleChat from '../atoms/CircleChat';
import CircleNotification from '../atoms/CircleNotification';
import IconCategories from '../icons/IconCategories';
import IconChat from '../icons/IconChat';
import IconLogo from '../icons/IconLogo';
import IconNotification from '../icons/IconNotification';
import IconPlay from '../icons/IconPlay';
import IconRanking from '../icons/IconRanking';

const HeaderMenu = ({ status, active }) => {

  const { data: user } = useSelector(state => state.user);

	return (
		<header className={`main-header s-main-center ${status}`}>
			<div className="ed-grid">
				<div className="s-cross-center">
					<div className="s-to-left s-cross-center">
						<NavLink activeClassName="" to="/" className="menu-container-logo s-cross-center">
							<i className="container-icon-logo">
								<IconLogo />
							</i>
							<h4 className={`content-color`}>GuessMusic</h4>
						</NavLink>
						<div className="menu-container">
							<NavLink activeClassName="" to="/" className="menu-list m-mr-2">
								<i className={`${active === "play" && "active"} container-icon-menu content-color`}>
									<IconPlay />
								</i>
								<h4 className={`${active === "play" && "active"} content-color`}>Jugar</h4>
							</NavLink>
							<NavLink activeClassName="" to="/ranking" className="menu-list m-mr-2">
								<i className={`${active === "ranking" && "active"} container-icon-menu content-color`}>
									<IconRanking />
								</i>
								<h4 className={`${active === "ranking" && "active"} content-color`}>Clasificación</h4>
							</NavLink>
							<NavLink activeClassName="" to="/categories" className="menu-list m-mr-2">
								<i className={`${active === "categories" && "active"} container-icon-menu content-color`}>
									<IconCategories />
								</i>
								<h4 className={`${active === "categories" && "active"} content-color`}>Categorias</h4>
							</NavLink>
						</div>
					</div>
					<div className="s-to-right s-cross-center">
						<div className="menu-icons">
							<NavLink activeClassName="" to="/notifications" className="menu-item-icon">
								<i className={`${active === "notification" && "active"} container-icon-nav content-color`}>
									<IconNotification />
									<CircleNotification />
								</i>
							</NavLink>
							<NavLink activeClassName="" to="/chat" className="menu-item-icon">
								<i className={`${active === "chat" && "active"} container-icon-nav content-color`}>
									<IconChat/>
									<CircleChat />
								</i>
							</NavLink>
							<NavLink activeClassName={`${active === "profile" ? "active" : ""}`} to={`/profile/${ user?.username }`} className="menu-item-profile">
								<img alt="profile" src={ user?.imgAvatar } />
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</header>
	)

}

HeaderMenu.defaultProps = {
	status: "",
	active: "",
}

export default HeaderMenu;

