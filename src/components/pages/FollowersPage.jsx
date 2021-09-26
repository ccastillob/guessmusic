
import React from 'react';

import AllListFollow from '../molecules/AllListFollow';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';

const FollowersPage = ({match}) => {

	// console.log(match);

	return (
		<>
			<HeaderMenuSecondary />
			<div className="ed-grid s-grid-12 container-followerpage main-container">
				<AllListFollow idUser={match.params.idUser}/>
			</div>
		</>
	)
}

export default FollowersPage;
