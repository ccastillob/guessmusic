import React from 'react'
import GhostButton from '../atoms/GhostButton'
import PrimaryButton from '../atoms/PrimaryButton'

const ItemRequestFriend = () => {
	return (
		<div className="ed-grid s-grid-12">
			<div className="container-listRequest">
				<h2 className="title-color">Solicitudes</h2>
				{/* INICIO NINGUNA SOLICITUD */}
				{/* <div className="container-item_request__empty">
					<h3 className="content-color s-center">Aún no tienes solicitudes.</h3>
				</div> */}
				{/* FIN NINGUNA SOLICITUD */}
				{/* INICIO TIENE SOLICITUD */}
				<div className="listRequestFriend-allItems">
					<div className="container-item_request">
						<h4 className="content-color text-justify"><span className="text-bold">Bumblebee</span> te ha mandado una solicitud para seguirte. ¿Deseas añadirlo a tu lista de amigos?</h4>
						<div className="container-buttons__request">
							<PrimaryButton title="Si, añadir" otherClass="s-mr-4"/>
							<GhostButton title="No" otherClass="ghost-error300-color"/>
						</div>
					</div>
					<div className="container-item_request">
						<h4 className="content-color text-justify"><span className="text-bold">Bumblebee</span> te ha mandado una solicitud para seguirte. ¿Deseas añadirlo a tu lista de amigos?</h4>
						<div className="container-buttons__request">
							<PrimaryButton title="Si, añadir" otherClass="s-mr-4"/>
							<GhostButton title="No" otherClass="ghost-error300-color"/>
						</div>
					</div>
					<div className="container-item_request">
						<h4 className="content-color text-justify"><span className="text-bold">Bumblebee</span> te ha mandado una solicitud para seguirte. ¿Deseas añadirlo a tu lista de amigos?</h4>
						<div className="container-buttons__request">
							<PrimaryButton title="Si, añadir" otherClass="s-mr-4"/>
							<GhostButton title="No" otherClass="ghost-error300-color"/>
						</div>
					</div>
					<div className="container-item_request__confirm">
						<h4 className="content-color"><span className="text-bold">Bumblebee</span> fue añadido a tu lista de amigos.</h4>
					</div>
					<div className="container-item_request__confirm">
						<h4 className="content-color"><span className="text-bold">Bumblebee</span> fue añadido a tu lista de amigos.</h4>
					</div>
					<div className="container-item_request__confirm">
						<h4 className="content-color"><span className="text-bold">Bumblebee</span> fue añadido a tu lista de amigos.</h4>
					</div>
				</div>
				{/* FIN TIENE SOLICITUD */}
			</div>
		</div>
	)
}

export default ItemRequestFriend
