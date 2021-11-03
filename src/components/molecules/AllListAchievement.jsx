
import React from 'react'
import { useSelector } from 'react-redux'
import ItemCompleteListAchievement from '../atoms/ItemCompleteListAchievement'
import ItemPendingListAchievement from '../atoms/ItemPendingListAchievement'

const AllListAchievement = ({ achievements, categories }) => {

	const { data } = useSelector(state => state.user);
	const { data: profile } = useSelector(state => state.otherProfile);

	console.log(achievements);
	console.log(categories);

	return (
		( achievements !== undefined && categories !== undefined ) ? (

			<div className="container-listAchievement">
				<h2 className="title-color">{`Lista de logros ${ profile?.username !== data?.username ? `- ${ profile?.name }` : "" }`}</h2>
				<div className="listAchievement-allItems">
					{/* TODO: APLICAR LOGROS PARA EL USUARIO */}
					{
							achievements?.map( (achiev, index) =>
								achiev.stateAchiev ? <ItemCompleteListAchievement key={ achiev._id } achievement={ achiev } indice={ index } /> : <ItemPendingListAchievement key={ achiev._id } achievement={ achiev } indice={ index } categories={ categories } />
							)
						}

					{/* <ItemPendingListAchievement />

					<ItemCompleteListAchievement />

					<ItemCompleteListAchievement />

					<ItemPendingListAchievement />
					<ItemPendingListAchievement /> */}

				</div>
			</div>

		) : (
			<h1>Skeleton de lista de logros</h1>
		)
	)
}

export default AllListAchievement
