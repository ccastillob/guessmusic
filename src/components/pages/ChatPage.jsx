
import React from 'react'
import IconButton from '../atoms/IconButton'
import PrimaryButton from '../atoms/PrimaryButton'
import IconSearch from '../icons/IconSearch'
import IconSend from '../icons/IconSend'
import IconShield from '../icons/IconShield'
import IconUser from '../icons/IconUser'

const ChatPage = () => {
	return (

		// <HeaderMenu status="chatview default"/>
		// 	<HeaderMenuSecondary status="chatview default"/>
		// <HeaderMenu status="chatview"/>
		// <HeaderMenuSecondary status="chatview"/>

		<div className="ed-container main-container container-allSectionsChat">
			<div className="ed-grid s-grid-12 s-gap-0">
				<div className="container-chatSectionLeft ">
					<h2 className="title-color s-center s-py-4">Amigos</h2>
					<form type="submit" className="chatSectionLeft_boxSearch">
						<i className="container-icon-searchFriend content-color">
							<IconSearch />
						</i>
						<input type="text" autoComplete="off" placeholder="Busca amigos" className="boxSearch-data text-overflow" />
					</form>
					<div className="chatSectionLeft_contentBoxItemsChat">
						<div className="contentBoxItemsChat-allItems">

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle online"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat select">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										{/* <div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div> */}
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

							<div className="container-item_userChat">
								<div className="item-userChat_avatar">
									<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
									<div className="avatar__statusCircle offline"></div>
								</div>
								<div className="item-userChat__data">
									<div className="data-content_top">
										<h4 className="text-bold text-overflow">Bumblebee</h4>
										<small className="text-bold">17:56</small>
									</div>
									<div className="data-content_bottom">
										<small className="text-overflow">Aqui iria el mensaje que servira como guia</small>
										<div className="circle_getMesaage">
											<h6 className="title-color text-bold">+9</h6>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className="container-chatSectionRight chatview ">
					<div className="chatSectionRight_headerConversation">
						<div className="headerConversation__avatar">
							<img src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" alt="avatarProfileChat" />
							<div className="avatar__statusCircle offline"></div>
						</div>
						<div className="headerConversation__data">
							<h4 className="text-overflow">Bumblebee XGeneration</h4>
							<div className="data-content__divitionConversation ancestral-divition">
								<i className="container-icon-shieldConversation s-mr-1">
									<IconShield />
								</i>
								<small className="text-bold">Ancestral</small>
							</div>
						</div>
						<PrimaryButton title="Perfil" />
						<IconButton icon={ <IconUser /> } type="profile" />
					</div>
					<div className="chatSectionRight_sectionConversation">
						<div className="sectionConversation-allItems ed-grid s-grid-12 s-gap-4">

							<div className="container-item_conversation received s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis rerum laboriosam vitae ad earum a ipsum, harum possimus quidem voluptate, cupiditate dolorum temporibus facere quibusdam! Illum, aut?</h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>


							<div className="container-item_conversation send s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis </h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

							<div className="container-item_conversation send s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis </h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

							<div className="container-item_conversation send s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis </h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

							<div className="container-item_conversation received s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis rerum laboriosam vitae ad earum a ipsum, harum possimus quidem voluptate, cupiditate dolorum temporibus facere quibusdam! Illum, aut?</h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

							<div className="container-item_conversation received s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis rerum laboriosam vitae ad earum a ipsum, harum possimus quidem voluptate, cupiditate dolorum temporibus facere quibusdam! Illum, aut?</h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

							<div className="container-item_conversation received s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis rerum laboriosam vitae ad earum a ipsum, harum possimus quidem voluptate, cupiditate dolorum temporibus facere quibusdam! Illum, aut?</h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

							<div className="container-item_conversation send s-cols-10">
								<h4 className="content-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt nemo veritatis </h4>
								<small className="auxiliary-color">12/08/21 18:31</small>
							</div>

						</div>
					</div>
					<form type="submit" className="chatSectionRight_footerConversation">
						<input type="text" placeholder="Escribe un mensaje" autoComplete="off" className="footerConversation__input text-overflow" />
						<button className="footerConversation__iconSend">
							<i className="container-icon-sendMessage primary-color">
								<IconSend />
							</i>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ChatPage
