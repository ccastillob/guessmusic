
import React from 'react';
import { useSelector } from 'react-redux';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionStadisticsProfile from '../molecules/SectionStadisticsProfile';
import SectionTopProfile from '../molecules/SectionTopProfile';
import SectionAchievementProfile from '../organisms/SectionAchievementProfile';
import SectionFriendProfile from '../organisms/SectionFriendProfile';

const ProfileUserPage = () => {

	const { data: user } = useSelector(state => state.user);

	return (
		<>
			<HeaderMenu active="profile" />
			<div className="ed-grid s-grid-12 main-container container-profilepage">

				<SectionTopProfile />

				<div className="section-bottom_profileUser ed-grid s-grid-12 s-cols-12">
					<div className="section__mix s-cols-12 m-cols-7">

						<SectionStadisticsProfile data={ user } />

						<SectionAchievementProfile />

					</div>
					<SectionFriendProfile />

				</div>
			</div>
			<FooterMenu />
		</>
	)
}

export default ProfileUserPage
