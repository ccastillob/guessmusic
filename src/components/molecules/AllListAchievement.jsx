
import React from 'react';
import { useSelector } from 'react-redux';

import ItemCompleteListAchievement from '../atoms/ItemCompleteListAchievement';
import ItemPendingListAchievement from '../atoms/ItemPendingListAchievement';

const AllListAchievement = ({ achievements, categories }) => {

	const { data } = useSelector(state => state.user);
	const { data: profile } = useSelector(state => state.otherProfile);

	return (
			<div className="container-listAchievement">
				<h2 className="title-color">{`Lista de logros ${ profile?.username !== data?.username ? `- ${ profile?.name }` : "" }`}</h2>
				<div className="listAchievement-allItems">
					{
						achievements?.map( (achiev, index) =>
							achiev.stateAchiev ? <ItemCompleteListAchievement key={ achiev._id } achievement={ achiev } indice={ index } /> : <ItemPendingListAchievement key={ achiev._id } achievement={ achiev } indice={ index } categories={ categories } />
						)
					}
				</div>
			</div>
	)

}

export default AllListAchievement;
