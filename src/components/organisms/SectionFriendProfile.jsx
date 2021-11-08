
import React from 'react';
import { useSelector } from 'react-redux';

import SectionFollowersProfile from '../molecules/SectionFollowersProfile';
import SectionFollowingsProfile from '../molecules/SectionFollowingsProfile';
import SkeletonSectionFriendProfile from '../skeletons/SkeletonSectionFriendProfile';

const SectionFriendProfile = () => {

	const { followings, followers } = useSelector(state => state.otherProfile );

	return (

		( followings !== undefined ) ? (

			<div className="section-friends s-cols-12 m-cols-5 m-x-8">
				<h2 className="title-color s-mb-4">Amigos</h2>

				<SectionFollowingsProfile followings={ followings } />

				<SectionFollowersProfile followers={ followers } />

			</div>
		) : (
			<SkeletonSectionFriendProfile />
		)
	)
}

export default SectionFriendProfile;
