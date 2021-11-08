
import React from 'react';

import ItemEmptyFriendProfile from '../atoms/ItemEmptyFriendProfile';
import ItemFollowProfile from '../atoms/ItemFollowProfile';
import ItemViewMoreFriendProfile from '../atoms/ItemViewMoreFriendProfile';

const SectionFollowersProfile = ({ followers }) => {

	const arrTotalMyFollowers = followers?.filter( follower => follower?.stateSubscriber === true );
	const arrOnlyThreeProfileFollowers = arrTotalMyFollowers?.slice(0,3);

	return (
		<div className="friends-followers">
			<div className="title-header__friends">
				<h3 className="content-color text-bold">Seguidores</h3>
			</div>

			{
				( arrOnlyThreeProfileFollowers?.length !== 0 )
				? (
					<>
						<div className="friends-allItems">
						{
							arrOnlyThreeProfileFollowers?.map( friend => (

								<ItemFollowProfile key={ friend.uid } friend={ friend } />

							))
						}
						</div>
						{
							( arrTotalMyFollowers?.length > 3 ) && <ItemViewMoreFriendProfile isFollowing={false} totalFollows={ arrTotalMyFollowers.length } />
						}
					</>

				)
				: (
					<ItemEmptyFriendProfile text="No tienes seguidores" />
				)
			}

		</div>
	)
}

export default SectionFollowersProfile;
