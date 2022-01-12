
import React from 'react';
import { useSelector } from 'react-redux';

import ItemEmptyListFollow from '../atoms/ItemEmptyListFollow';
import ItemFollowProfile from '../atoms/ItemFollowProfile';
import SkeletonAllListFollow from '../skeletons/SkeletonAllListFollow';

const AllListFollowing = ({ followings }) => {

	const { data } = useSelector(state => state.user);
	const { data: profile } = useSelector(state => state.otherProfile);
	const arrTotalMyFollowings = followings?.filter( following => following?.stateSubscription === true );

	return (

		( profile !== null ) ? (

			<div className="container-listFollow">
				<h2 className="title-color">{`Lista de seguidos ${ profile?.username !== data?.username ? `- ${ profile?.name }` : "" }`}</h2>
				{

					( arrTotalMyFollowings?.length !== 0 )
					? (
						<div className="listFollow-allItems">
							{
								arrTotalMyFollowings?.map( friend  => (

									<ItemFollowProfile key={ friend.uid } friend={ friend } />

								))
							}
						</div>
					) : (
						<ItemEmptyListFollow text="Aún no has seguido." />
					)

				}

		</div>

		) : (
			<SkeletonAllListFollow />
		)

	)

}

export default AllListFollowing;
