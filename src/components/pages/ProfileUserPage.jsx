
import React from 'react';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionStadisticsProfile from '../molecules/SectionStadisticsProfile';
import SectionTopProfile from '../molecules/SectionTopProfile';
import SectionFriendProfile from '../organisms/SectionFriendProfile';
import SectionAchievementProfile from '../organisms/SectionAchievementProfile';

const ProfileUserPage = ({match}) => {

	// console.log(match);

	return (
		<>
			<HeaderMenu active="profile" />
			<div className="ed-grid s-grid-12 main-container container-profilepage">

				<SectionTopProfile profile={match.params.idUser === "123" ? true : false} />

				<div className="section-bottom_profileUser ed-grid s-grid-12 s-cols-12">
					<div className="section__mix s-cols-12 m-cols-7">

						<SectionStadisticsProfile />

						{/* FRIEND MOBILE */}
						<SectionFriendProfile mobile={true} />

						{/* LOGRO WEB */}
						<SectionAchievementProfile />

					</div>
					{/* FRIEND WEB */}
					<SectionFriendProfile />

					{/* LOGRO MOBILE */}
					<SectionAchievementProfile mobile={true} />

				</div>
			</div>
			<FooterMenu />
		</>
	)
}

export default ProfileUserPage
