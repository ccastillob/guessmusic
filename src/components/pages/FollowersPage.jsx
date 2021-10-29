
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearProfileData, startProfileData, startProfileFollowers, startProfileFollowings } from '../../actions/profile';
import AllListFollower from '../molecules/AllListFollower';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';

const FollowersPage = ({match}) => {

	const dispatch = useDispatch();
	const { followers } = useSelector(state => state.otherProfile );

	useEffect(() => {

		dispatch( clearProfileData() )
		dispatch( startProfileData( match.params.username ) );
		dispatch( startProfileFollowings( match.params.username ) );
		dispatch( startProfileFollowers( match.params.username ) );

	}, [ dispatch, match ])

	return (
		<>
			<HeaderMenuSecondary />
			<div className="ed-grid s-grid-12 container-followerpage main-container">
				<AllListFollower followers={ followers }/>
			</div>
		</>
	)
}

export default FollowersPage;
