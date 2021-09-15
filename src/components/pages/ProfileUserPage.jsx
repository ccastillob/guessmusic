
import React from 'react'
import GhostButton from '../atoms/GhostButton'
import IconButton from '../atoms/IconButton'
import PrimaryButton from '../atoms/PrimaryButton'
import IconAddUserFollow from '../icons/IconAddUserFollow'
import IconDate from '../icons/IconDate'
import IconEdit from '../icons/IconEdit'
import IconExp from '../icons/IconExp'
import IconFollow from '../icons/IconFollow'
import IconRight from '../icons/IconRight'
import IconShield from '../icons/IconShield'
import IconVersus from '../icons/IconVersus'

const ProfileUserPage = () => {
	return (
		<>
			<div className="ed-grid s-grid-12">
				<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">
					<div className="profileUser-container_left s-cols-12 m-cols-8">
						<div className="container-left_avatar s-order-2 m-order-1">
							<img src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" alt="avatarProfile" />
							<div className="avatar__editImage">
								<i className="container-icon-editProfile">
									<IconEdit />
								</i>
							</div>
						</div>
						<div className="container-left_data s-order-1 m-order-2">
							<h3 className="content-color text-bold s-mb-1 text_line-clamp">Optimus</h3>
							<h3 className="content-color text-bold s-mb-4 text_line-clamp">Prime</h3>
							<div className="data-content__createdAt s-mb-1">
								<i className="container-icon-dateProfile content-color">
									<IconDate />
								</i>
								<h4 className="content-color text_line-clamp">Se unió el 04/08/21</h4>
							</div>
							<div className="data-content__friends">
								<i className="container-icon-followProfile content-color">
									<IconFollow />
								</i>
								<h4 className="content-color text_line-clamp text_web">Siguiendo a 0 / 7 seguidores</h4>
								<h4 className="content-color text_line-clamp text_mobile">0 amigos</h4>
							</div>
						</div>
					</div>
					<div className="profileUser-container_right s-cols-12 m-cols-4">
						<PrimaryButton title="Editar perfil" otherClass="s-mb-2 m-mb-4"/>
						<GhostButton title="Cerrar sesión" otherClass="ghost-error300-color" />
					</div>
				</div>
				<div className="section-bottom_profileUser ed-grid s-grid-12 s-cols-12">
					<div className="section__mix s-cols-12 m-cols-7">
						<div className="section-stadistics s-mb-4">
							<h2 className="title-color s-mb-4">Estadisticas</h2>
							<div className="stadistics-allItems ed-grid s-grid-2 m-grid-2">
								<div className="item-experience">
									<i className="container-icon-experienceProfile primary-color s-mr-2">
										<IconExp />
									</i>
									<div className="experience__data">
										<h4 className="content-color text-bold s-mb-1">9500</h4>
										<h6 className="auxiliary-color">EXP totales</h6>
									</div>
								</div>
								<div className="item-divition">
									<i className="container-icon-shieldProfile divino-divition s-mr-2">
										<IconShield />
									</i>
									<div className="divition__data">
										<h4 className="content-color text-bold s-mb-1">Divino</h4>
										<h6 className="auxiliary-color">División actual</h6>
									</div>
								</div>
							</div>
						</div>

						{/* FRIEND MOBILE */}
						<div className="section-friends_mobile s-cols-12 m-cols-5 m-x-8">
							<h2 className="title-color s-mb-4">Amigos</h2>
							<div className="friends-following s-mb-4">
								<div className="title-header__friends">
									<h3 className="content-color text-bold">Siguiendo</h3>
								</div>
								<div className="container-item_friend__empty">
									<h4 className="content-color">Sin seguidores</h4>
								</div>
							</div>
							<div className="friends-followers">
								<div className="title-header__friends">
									<h3 className="content-color text-bold">Seguidores</h3>
								</div>
								<div className="friends-allItems">
									<div className="container-item_friend">
										<div className="group-item_friend">
											<div class="item-friend__profile">
												<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
											</div>
											<div className="item-friend__data">
												<h4 className="data-name text_line-clamp">Bumblebee</h4>
												<small className="data-experience text_line-clamp">7800 EXP</small>
											</div>
										</div>
										<IconButton icon={<IconAddUserFollow />} />
									</div>
									<div className="container-item_friend__exist">
										<div className="group-item_friend">
											<div class="item-friend__profile">
												<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
											</div>
											<div className="item-friend__data-exist">
												<h4 className="data-name text_line-clamp">Bumblebee</h4>
												<small className="data-experience text_line-clamp">7800 EXP</small>
											</div>
										</div>
									</div>
									<div className="container-item_friend__exist">
										<div className="group-item_friend">
											<div class="item-friend__profile">
												<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
											</div>
											<div className="item-friend__data-exist">
												<h4 className="data-name text_line-clamp">Bumblebee</h4>
												<small className="data-experience text_line-clamp">7800 EXP</small>
											</div>
										</div>
									</div>
								</div>
								<div className="next-footer__friends ed-grid s-grid-2 s-gap-4">
									<h4 className="content-color text-bold">Ver 7 más</h4>
									<i className="container-icon-arrowRightFriend primary-color">
										<IconRight />
									</i>
								</div>
							</div>
						</div>

						{/* LOGRO WEB */}
						<div className="section-achievements">
							<h2 className="title-color s-mb-4">Logros</h2>
							<div className="achievements-allItems">

								<div className="container-item_achievement">
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

								<div className="container-item_achievement">
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

								<div className="container-item_achievement__complete">
									<i className="container-icon-achievementProfile primary-color">
										<IconVersus />
									</i>
									<div className="item-achievement__data__complete">
										<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
										<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
									</div>
								</div>

								<div className="container-item_achievement">
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

								<div className="container-item_achievement">
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
							<div className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
								<h4 className="content-color text-bold">Ver todos</h4>
								<i className="container-icon-arrowRightAchievement primary-color">
									<IconRight />
								</i>
							</div>
						</div>
					</div>
						{/* FRIEND WEB */}
					<div className="section-friends s-cols-12 m-cols-5 m-x-8">
						<h2 className="title-color s-mb-4">Amigos</h2>
						<div className="friends-following s-mb-4">
							<div className="title-header__friends">
								<h3 className="content-color text-bold">Siguiendo</h3>
							</div>
							<div className="container-item_friend__empty">
								<h4 className="content-color">Sin seguidores</h4>
							</div>
						</div>
						<div className="friends-followers">
							<div className="title-header__friends">
								<h3 className="content-color text-bold">Seguidores</h3>
							</div>
							<div className="friends-allItems">
								<div className="container-item_friend">
									<div className="group-item_friend">
										<div class="item-friend__profile">
											<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
										</div>
										<div className="item-friend__data">
											<h4 className="data-name text_line-clamp">Bumblebee</h4>
											<small className="data-experience text_line-clamp">7800 EXP</small>
										</div>
									</div>
									<IconButton icon={<IconAddUserFollow />} />
								</div>
								<div className="container-item_friend__exist">
									<div className="group-item_friend">
										<div class="item-friend__profile">
											<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
										</div>
										<div className="item-friend__data-exist">
											<h4 className="data-name text_line-clamp">Bumblebee</h4>
											<small className="data-experience text_line-clamp">7800 EXP</small>
										</div>
									</div>
								</div>
								<div className="container-item_friend__exist">
									<div className="group-item_friend">
										<div class="item-friend__profile">
											<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
										</div>
										<div className="item-friend__data-exist">
											<h4 className="data-name text_line-clamp">Bumblebee</h4>
											<small className="data-experience text_line-clamp">7800 EXP</small>
										</div>
									</div>
								</div>
							</div>
							<div className="next-footer__friends ed-grid s-grid-2 s-gap-4">
								<h4 className="content-color text-bold">Ver 10 más</h4>
								<i className="container-icon-arrowRightFriend primary-color">
									<IconRight />
								</i>
							</div>
						</div>
					</div>

					{/* LOGRO MOBILE */}
					<div className="section-achievements_mobile s-cols-12">
						<h2 className="title-color s-mb-4">Logros</h2>
						<div className="achievements-allItems">

							<div className="container-item_achievement">
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

							<div className="container-item_achievement">
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

							<div className="container-item_achievement__complete">
								<i className="container-icon-achievementProfile primary-color">
									<IconVersus />
								</i>
								<div className="item-achievement__data__complete">
									<h4 className="content-color text-bold text-overflow">Nombre del logro</h4>
									<h6 className="auxiliary-color text-overflow">Completa el nivel 1</h6>
								</div>
							</div>

							<div className="container-item_achievement">
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

							<div className="container-item_achievement">
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
						<div className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
							<h4 className="content-color text-bold">Ver todos</h4>
							<i className="container-icon-arrowRightAchievement primary-color">
								<IconRight />
							</i>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default ProfileUserPage
