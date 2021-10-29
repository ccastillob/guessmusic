
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ProfileUserPage from './ProfileUserPage';
import ProfileFriendPage from './ProfileFriendPage';
import { clearProfileData, startProfileData, startProfileFollowers, startProfileFollowings } from '../../actions/profile';

const SelectProfilePage = ({match}) => {

	const dispatch = useDispatch();
	const { data: user } = useSelector(state => state.user);

	useEffect(() => {

			dispatch( clearProfileData() )
			dispatch( startProfileData( match.params.username ) );
			dispatch( startProfileFollowings( match.params.username ) );
			dispatch( startProfileFollowers( match.params.username ) );

		}, [ dispatch, match ])

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
				// TODO: AGREGAR SKELETON
				<h1>SKELETON DE PROFILE</h1>
			)


		}
		</>
	)
}

export default SelectProfilePage;
