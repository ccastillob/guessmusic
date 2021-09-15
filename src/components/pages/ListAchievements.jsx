
import React from 'react'
import IconVersus from '../icons/IconVersus'

const ListAchievements = () => {
	return (
		<div className="ed-grid s-grid-12">
			<div className="container-listAchievement">
				<h2 className="title-color">Lista de logros</h2>
				<div className="listAchievement-allItems">
					<div className="container-item_listAchievement">
						<i className="container-icon-achievementProfile primary-color">
							<IconVersus />
						</i>
						<div className="item-achievement__data">
							<div className="data_achievement__description s-mb-2">
								<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
								<h4 className="content-color">01 / 10</h4>
							</div>
							<div className="data_achievement__progress s-mb-1">
								<div className="progress__porcentage" style={{width: `${10}%`}}></div>
							</div>
							<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
						</div>
					</div>

					<div className="container-item_listAchievement">
						<i className="container-icon-achievementProfile primary-color">
							<IconVersus />
						</i>
						<div className="item-achievement__data">
							<div className="data_achievement__description s-mb-2">
								<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
								<h4 className="content-color">00 / 10</h4>
							</div>
							<div className="data_achievement__progress s-mb-1">
								<div className="progress__porcentage" style={{width: `${0}%`}}></div>
							</div>
							<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
						</div>
					</div>

					<div className="container-item_listAchievement__complete">
						<i className="container-icon-achievementProfile primary-color">
							<IconVersus />
						</i>
						<div className="item-achievement__data__complete">
							<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
							<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
						</div>
					</div>

					<div className="container-item_listAchievement">
						<i className="container-icon-achievementProfile primary-color">
							<IconVersus />
						</i>
						<div className="item-achievement__data">
							<div className="data_achievement__description s-mb-2">
								<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
								<h4 className="content-color">01 / 10</h4>
							</div>
							<div className="data_achievement__progress s-mb-1">
								<div className="progress__porcentage" style={{width: `${10}%`}}></div>
							</div>
							<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
						</div>
					</div>

					<div className="container-item_listAchievement">
						<i className="container-icon-achievementProfile primary-color">
							<IconVersus />
						</i>
						<div className="item-achievement__data">
							<div className="data_achievement__description s-mb-2">
								<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
								<h4 className="content-color">01 / 10</h4>
							</div>
							<div className="data_achievement__progress s-mb-1">
								<div className="progress__porcentage" style={{width: `${10}%`}}></div>
							</div>
							<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListAchievements
