
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import IconLeft from '../icons/IconLeft';

const HeaderMenuSecondary = ({status, active}) => {

	let history = useHistory();
	const { data: user } = useSelector(state => state.user);

	const handleGoToBack = (e) => {
		e.preventDefault();
		if( status.includes('chatview')  ) {
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

HeaderMenuSecondary.defaultProps = {
	status: "",
	active: ""
}

export default HeaderMenuSecondary;

