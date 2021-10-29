
import React from 'react';
import { useSelector } from 'react-redux';

import ItemEmptyListFollow from '../atoms/ItemEmptyListFollow';
import ItemFollowProfile from '../atoms/ItemFollowProfile';

const AllListFollowers = ({followers}) => {

	const { data } = useSelector(state => state.user)
	const { data: profile } = useSelector(state => state.otherProfile)
	const arrTotalMyFollowers = followers?.filter( follower => follower?.stateSubscriber === true );

	return (

		( profile !== null ) ? (

			<div className="container-listFollow">
			<h2 className="title-color">{`Lista de seguidores ${ profile?.username !== data?.username ? `- ${ profile?.name }` : "" }`}</h2>
			{

				( arrTotalMyFollowers?.length !== 0 )
				? (
					<>
						<div className="listFollow-allItems">
							{
								arrTotalMyFollowers?.map( friend  => (

									<ItemFollowProfile key={ friend.uid } friend={ friend } />

								))
							}
						</div>
					</>


				) : (
					<ItemEmptyListFollow text="Aún no tienes seguidores." />
				)

			}

		</div>

		) : (
			// TODO: AGREGAR UN SKELETON
			<h1>Skeleton de lista seguidores</h1>

		)

	)
}

export default AllListFollowers;
