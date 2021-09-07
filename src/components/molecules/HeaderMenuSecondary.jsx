
import React from 'react'
// import { NavLink } from 'react-router-dom';
import IconLeft from '../icons/IconLeft';


const HeaderMenuSecondary = () => {
	return (
		<header className="secondary-header s-main-center">
			<div className="ed-grid">
				<div className="s-cross-center">
					<div className="s-to-left s-cross-center">
						<div className="menu-container-arrow s-cross-center">
							<i className="container-icon-arrowBackMenu content-color">
								<IconLeft />
							</i>
						</div>
					</div>
					<div className="s-to-right s-cross-center">
						<div className="menu-icons">
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

export default HeaderMenuSecondary;

