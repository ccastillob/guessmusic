
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearProfileData, startProfileData, startProfileFollowers, startProfileFollowings } from '../../actions/profile';
import AllListFollowing from '../molecules/AllListFollowing';
import HeaderMenuSecondary from '../molecules/HeaderMenuSecondary';

const FollowingsPage = ({match}) => {

	const dispatch = useDispatch();
	const { followings } = useSelector(state => state.otherProfile );

	useEffect(() => {

		dispatch( clearProfileData() )
		dispatch( startProfileData( match.params.username ) );
		dispatch( startProfileFollowings( match.params.username ) );
		dispatch( startProfileFollowers( match.params.username ) );

	}, [ dispatch, match ])

	return (
		<>
			<HeaderMenuSecondary />
			<div className="ed-grid s-grid-12 container-followingpage main-container">
				<AllListFollowing followings={ followings } />
			</div>
		</>
	)
}

export default FollowingsPage;
