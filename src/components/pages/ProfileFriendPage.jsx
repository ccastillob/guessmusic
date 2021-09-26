
import React from 'react';
import { Link } from 'react-router-dom';

import FollowButton from '../atoms/FollowButton';
import IconButton from '../atoms/IconButton';
import IconAddUserFollow from '../icons/IconAddUserFollow';
import IconDate from '../icons/IconDate';
import IconExp from '../icons/IconExp';
import IconFollow from '../icons/IconFollow';
import IconRight from '../icons/IconRight';
import IconShield from '../icons/IconShield';
import IconUserSelect from '../icons/IconUserSelect';
import IconVersus from '../icons/IconVersus';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';

// NO ESTA SIENDO USADA

const ProfileFriendPage = () => {

	return (
		<>
			<HeaderMenu />
			<div className="ed-grid s-grid-12 main-container container-profilepage">

				<div className="section-top_profileUser ed-grid s-grid-12 s-cols-12">

					<div className="profileUser-container_left s-cols-12 m-cols-8">
						<div className="container-left_avatar s-order-2 m-order-1">
							<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfile" />
						</div>
						<div className="container-left_data s-order-1 m-order-2">
							<h3 className="content-color text-bold s-mb-1 text_line-clamp">Bumblebee</h3>
							<h3 className="content-color text-bold s-mb-4 text_line-clamp">XGeneration</h3>
							<div className="data-content__createdAt s-mb-1">
								<i className="container-icon-dateProfile content-color">
									<IconDate />
								</i>
								<h4 className="content-color text_line-clamp">Se unió el 28/08/21</h4>
							</div>
							<div className="data-content__friends">
								<i className="container-icon-followProfile content-color">
									<IconFollow />
								</i>
								<h4 className="content-color text_line-clamp text_web">Siguiendo a 12 / 0 seguidores</h4>
								<h4 className="content-color text_line-clamp text_mobile">12 amigos</h4>
							</div>
						</div>
					</div>

					<div className="profileUser-container_right s-cols-12 m-cols-4">
						{/* <FollowButton title="Seguir" icon={<IconAddUserFollow />} otherClass="follow-primary-color"/> */}
						{/* <FollowButton title="Solicitud enviada" icon={<IconUserWaiting />} otherClass="follow-warning500-color"/> */}
						<FollowButton title="Siguiendo" icon={<IconUserSelect />} otherClass="follow-success500-color"/>
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
										<h4 className="content-color text-bold s-mb-1">7800</h4>
										<h6 className="auxiliary-color">EXP totales</h6>
									</div>
								</div>
								<div className="item-divition">
									<i className="container-icon-shieldProfile ancestral-divition s-mr-2">
										<IconShield />
									</i>
									<div className="divition__data">
										<h4 className="content-color text-bold s-mb-1">Ancestral</h4>
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
								<div className="friends-allItems">

									<div className="container-item_friend">
										<Link to="/profile/123" className="group-item_friend content-color">
											<div className="item-friend__profile">
												<img alt="userprofile" src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" />
											</div>
											<div className="item-friend__data">
												<h4 className="data-name text_line-clamp">Optimus</h4>
												<small className="data-experience text_line-clamp">9500 EXP</small>
											</div>
										</Link>
										<IconButton icon={<IconAddUserFollow />} />
									</div>

									<div className="container-item_friend__exist">
										<div className="group-item_friend content-color">
											<div className="item-friend__profile">
												<img alt="userprofile" src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" />
											</div>
											<div className="item-friend__data-exist">
												<h4 className="data-name text_line-clamp">Optimus</h4>
												<small className="data-experience text_line-clamp">9500 EXP</small>
											</div>
										</div>
									</div>

									<div className="container-item_friend__exist">
										<div className="group-item_friend content-color">
											<div className="item-friend__profile">
												<img alt="userprofile" src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" />
											</div>
											<div className="item-friend__data-exist">
												<h4 className="data-name text_line-clamp">Optimus</h4>
												<small className="data-experience text_line-clamp">9500 EXP</small>
											</div>
										</div>
									</div>

								</div>

								<Link to="/profile/121/followings" className="next-footer__friends ed-grid s-grid-2 s-gap-4">
									<h4 className="content-color text-bold">Ver 9 más</h4>
									<i className="container-icon-arrowRightFriend primary-color">
										<IconRight />
									</i>
								</Link>

							</div>
							<div className="friends-followers">
								<div className="title-header__friends">
									<h3 className="content-color text-bold">Seguidores</h3>
								</div>
								<div className="container-item_friend__empty">
									<h4 className="content-color">No tienes seguidores</h4>
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
							<Link to="/profile/121/achievements" className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
								<h4 className="content-color text-bold">Ver todos</h4>
								<i className="container-icon-arrowRightAchievement primary-color">
									<IconRight />
								</i>
							</Link>
						</div>
					</div>
						{/* FRIEND WEB */}
					<div className="section-friends s-cols-12 m-cols-5 m-x-8">
						<h2 className="title-color s-mb-4">Amigos</h2>
						<div className="friends-following s-mb-4">
							<div className="title-header__friends">
								<h3 className="content-color text-bold">Siguiendo</h3>
							</div>
							<div className="friends-allItems">
								<div className="container-item_friend">
									<Link to="/profile/123" className="group-item_friend content-color">
										<div className="item-friend__profile">
											<img alt="userprofile" src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" />
										</div>
										<div className="item-friend__data">
											<h4 className="data-name text_line-clamp">Optimus</h4>
											<small className="data-experience text_line-clamp">9500 EXP</small>
										</div>
									</Link>
									<IconButton icon={<IconAddUserFollow />} />
								</div>
								<div className="container-item_friend__exist">
									<div className="group-item_friend content-color">
										<div className="item-friend__profile">
											<img alt="userprofile" src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" />
										</div>
										<div className="item-friend__data-exist">
											<h4 className="data-name text_line-clamp">Optimus</h4>
											<small className="data-experience text_line-clamp">9500 EXP</small>
										</div>
									</div>
								</div>
								<div className="container-item_friend__exist">
									<div className="group-item_friend content-color">
										<div className="item-friend__profile">
											<img alt="userprofile" src="https://hotstuff4geeks.com/wp-content/uploads/2020/09/Funko-Pop-Retro-Toys-Transformers-Metallic-Optimus-Prime-2.jpg" />
										</div>
										<div className="item-friend__data-exist">
											<h4 className="data-name text_line-clamp">Optimus</h4>
											<small className="data-experience text_line-clamp">9500 EXP</small>
										</div>
									</div>
								</div>
							</div>
							<Link to="/profile/121/followings" className="next-footer__friends ed-grid s-grid-2 s-gap-4">
								<h4 className="content-color text-bold">Ver 9 más</h4>
								<i className="container-icon-arrowRightFriend primary-color">
									<IconRight />
								</i>
							</Link>
						</div>
						<div className="friends-followers">
							<div className="title-header__friends">
								<h3 className="content-color text-bold">Seguidores</h3>
							</div>
							<div className="container-item_friend__empty">
								<h4 className="content-color">No tienes seguidores</h4>
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
						<Link to="/profile/121/achievements" className="next-footer__achievements ed-grid s-grid-2 s-gap-4">
							<h4 className="content-color text-bold">Ver todos</h4>
							<i className="container-icon-arrowRightAchievement primary-color">
								<IconRight />
							</i>
						</Link>
					</div>

				</div>
			</div>
			<FooterMenu />
		</>
	)
}

export default ProfileFriendPage;