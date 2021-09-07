
import React from 'react'
// import { NavLink } from 'react-router-dom';
import IconCategories from '../icons/IconCategories';
import IconChat from '../icons/IconChat';
import IconLogo from '../icons/IconLogo';
import IconNotificationFull from '../icons/IconNotificationFull';
import IconPlay from '../icons/IconPlay';
import IconRanking from '../icons/IconRanking';
import IconVersus from '../icons/IconVersus';

const HeaderMenu = () => {
	return (
		<header className="main-header s-main-center">
			<div className="ed-grid">
				<div className="s-cross-center">
					<div className="s-to-left s-cross-center">
						<div className="menu-container-logo s-cross-center">
							<i className="container-icon-logo">
								<IconLogo />
							</i>
							<h4 className={`content-color`}>GuessMusic</h4>
						</div>
						<div className="menu-container">
							<div to="/" className="menu-list m-mr-2">
								<i className="container-icon-menu content-color">
									<IconPlay />
								</i>
								<h4 className={`content-color`}>Jugar</h4>
							</div>
							<div to="/" className="menu-list m-mr-2">
								<i className="container-icon-menu content-color">
									<IconRanking />
								</i>
								<h4 className={`content-color`}>Clasificación</h4>
							</div>
							<div to="/" className="menu-list m-mr-2">
								<i className="container-icon-menu content-color">
									<IconCategories />
								</i>
								<h4 className={`content-color`}>Categorias</h4>
							</div>
							<div to="/" className="menu-list">
								<i className="container-icon-menu content-color active">
									<IconVersus />
								</i>
								<h4 className={`content-color active`}>Batalla</h4>
							</div>
						</div>
					</div>
					<div className="s-to-right s-cross-center">
						<div className="menu-icons">
							<div to="/" className="menu-item-icon">
								<i className="container-icon-nav content-color">
									<IconNotificationFull/>
								</i>
							</div>
							<div to="/" className="menu-item-icon">
								<i className="container-icon-nav content-color active">
									<IconChat/>
								</i>
							</div>
							<div class="menu-item-profile">
								<img alt="profile" src="https://th.bing.com/th/id/OIP.5C7gR_T8k_r45PSdZdR7nAHaHa?pid=ImgDet&rs=1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderMenu;

