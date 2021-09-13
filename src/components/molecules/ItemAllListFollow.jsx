import React from 'react'
import IconAddUserFollow from '../icons/IconAddUserFollow'

export const ItemAllListFollow = () => {
	return (
		<div className="ed-grid s-grid-12">
			<div className="container-listFollow">
				<h2 className="title-color">Lista de seguidos</h2>
				{/* INICIO NINGUNA SOLICITUD */}
				{/* <div className="container-item_request__empty">
					<h3 className="content-color s-center">Aún no te han seguido.</h3>
				</div> */}
				{/* FIN NINGUNA SOLICITUD */}
				{/* INICIO TIENE SOLICITUD */}
				<div className="listFollow-allItems">
					<div className="container-item_follow">
						<div className="group-item_follow">
							<div class="item-follow__profileFollow">
								<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
							</div>
							<div className="item-follow__data">
								<h3 className="data-name text_line-clamp">Bumblebee</h3>
								<h4 className="data-experience text_line-clamp">7800 EXP</h4>
							</div>
						</div>
						<div className="item-follow__button normal-primary-color">
							<i className="container-icon-follow">
								<IconAddUserFollow />
							</i>
						</div>
					</div>
					<div className="container-item_follow__exist">
						<div className="group-item_follow">
							<div class="item-follow__profileFollow">
								<img alt="userprofile" src="https://www.biwi-shop.com/15462-large_default/transformers-super-deformed-bumblebee-10-cm.jpg" />
							</div>
							<div className="item-follow__data-exist">
								<h3 className="data-name text_line-clamp">Bumblebee</h3>
								<h4 className="data-experience text_line-clamp">7800 EXP</h4>
							</div>
						</div>
					</div>
				</div>
				{/* FIN TIENE SOLICITUD */}
			</div>
		</div>
	)
}
