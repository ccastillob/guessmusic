
import React from 'react';

import ItemEmptyFriendProfile from '../atoms/ItemEmptyFriendProfile';
import ItemFollowProfile from '../atoms/ItemFollowProfile';
import ItemViewMoreFriendProfile from '../atoms/ItemViewMoreFriendProfile';

const SectionFollowingsProfile = ({ followings }) => {

	const arrTotalMyFollowings = followings?.filter( following => following?.stateSubscription === true );
	const arrOnlyThreeProfileFollowings = arrTotalMyFollowings?.slice(0,3);

	return (
		<div className="friends-following s-mb-4">
			<div className="title-header__friends">
				<h3 className="content-color text-bold">Siguiendo</h3>
			</div>

			{
				( arrOnlyThreeProfileFollowings?.length !== 0 )
				? (
					<>
						<div className="friends-allItems">
						{
							arrOnlyThreeProfileFollowings?.map( friend => (

								<ItemFollowProfile key={ friend.uid } friend={ friend } />

							))
						}
						</div>
						{
							( arrTotalMyFollowings?.length > 3 ) && <ItemViewMoreFriendProfile isFollowing={true} totalFollows={ arrTotalMyFollowings.length } />
						}
					</>

				)
				: (
					<ItemEmptyFriendProfile text="Sin seguidores" />
				)
			}

		</div>
	)
}

export default SectionFollowingsProfile;
