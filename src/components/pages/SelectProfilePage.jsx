
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ProfileUserPage from './ProfileUserPage';
import ProfileFriendPage from './ProfileFriendPage';
import { clearProfileData, startProfileAchievements, startProfileCategories, startProfileData, startProfileFollowers, startProfileFollowings } from '../../actions/profile';
import { startUserData } from '../../actions/user';
import LoadingPage from './LoadingPage';

const SelectProfilePage = ({match}) => {

	const dispatch = useDispatch();
	const { data: user } = useSelector(state => state.user);
	const { uid } = useSelector(state => state.auth);

	useEffect(() => {

			dispatch( clearProfileData() )
			dispatch( startProfileData( match.params.username ) );
			dispatch( startProfileFollowings( match.params.username ) );
			dispatch( startProfileFollowers( match.params.username ) );
			dispatch( startProfileAchievements( match.params.username ) );
			dispatch( startProfileCategories( match.params.username ) );

		}, [ dispatch, match ])

	useEffect(() => {

			dispatch( startUserData(uid) )

		}, [ dispatch, uid ])

	return (
		<>
			{

				( user !== null ) ? (
					( user?.username === match.params.username )
					? (
						<ProfileUserPage />
					)
					: (
						<ProfileFriendPage />
					)
				) :(
					<LoadingPage />
				)

			}
		</>
	)
}

export default SelectProfilePage;
