
import React from 'react';
import { useSelector } from 'react-redux';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionStadisticsProfile from '../molecules/SectionStadisticsProfile';
import SectionTopProfileFriend from '../molecules/SectionTopProfileFriend';
import SectionAchievementProfile from '../organisms/SectionAchievementProfile';
import SectionFriendProfile from '../organisms/SectionFriendProfile';

const ProfileFriendPage = () => {

	const { data: profile } = useSelector(state => state.otherProfile);

	return (
		<>
			<HeaderMenu />
			<div className="ed-grid s-grid-12 main-container container-profilepage">
					<SectionTopProfileFriend />
					<div className="section-bottom_profileUser ed-grid s-grid-12 s-cols-12">
					<div className="section__mix s-cols-12 m-cols-7">
						<SectionStadisticsProfile data={ profile }/>
						<SectionAchievementProfile />
					</div>
					<SectionFriendProfile />
				</div>
			</div>
			<FooterMenu />
		</>
	)

}

export default ProfileFriendPage;