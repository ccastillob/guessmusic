
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import IconLeft from '../icons/IconLeft';

const HeaderMenuSecondary = ({status, setChatActivo, active}) => {

	let history = useHistory()

	const handleGoToBack = (e) => {
		e.preventDefault();
		if( status === 'chatview' ) {
			setChatActivo(false)
			history.push("/chat")
		}else {
			history.goBack();
		}

	}

	return (
		<header className={`secondary-header s-main-center ${status}`}>
			<div className="ed-grid">
				<div className="s-cross-center">
					<div className="s-to-left s-cross-center">
						<div onClick={ handleGoToBack } className="menu-container-arrow s-cross-center">
							<i className="container-icon-arrowBackMenu content-color">
								<IconLeft />
							</i>
						</div>
					</div>
					<div className="s-to-right s-cross-center">
						<div className="menu-icons">
							<NavLink activeClassName={`${active === "profile" ? "active" : ""}`} to="/profile/121" className="menu-item-profile">
								<img alt="profile" src="https://th.bing.com/th/id/OIP.5C7gR_T8k_r45PSdZdR7nAHaHa?pid=ImgDet&rs=1" />
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

HeaderMenuSecondary.defaultProps = {
	status: "",
	active: ""
}

export default HeaderMenuSecondary;

