
import React from 'react';

import SectionFollowersProfile from '../molecules/SectionFollowersProfile';
import SectionFollowingsProfile from '../molecules/SectionFollowingsProfile';

const SectionFriendProfile = ({mobile}) => {

	return (
		<div className={`section-friends${mobile ? "_mobile" : ""} s-cols-12 m-cols-5 m-x-8`}>
			<h2 className="title-color s-mb-4">Amigos</h2>

			<SectionFollowingsProfile />

			<SectionFollowersProfile />

		</div>
	)
}

export default SectionFriendProfile;
