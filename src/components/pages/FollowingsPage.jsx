
import React from 'react';

import AllListFollow from '../molecules/AllListFollow';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';

const FollowingsPage = ({match}) => {

	// console.log(match);

	return (
		<>
			<HeaderMenuSecondary />
			<div className="ed-grid s-grid-12 container-followingpage main-container">
				<AllListFollow txtFollowing={true} idUser={match.params.idUser}/>
			</div>
		</>
	)
}

export default FollowingsPage;
