
import React from 'react';

import IconShield from '../icons/IconShield';

const ItemDivitionRanking = () => {

	return (
		<div className="container-listDivition s-order-1 m-order-2">
			<h2 className="title-color s-mb-4 s-px-4 s-center">Rango de divisiones</h2>
			<div className="listDivition-allItems">
				<div className="container-item_divition s-cross-center heraldo-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Heraldo</h4>
					<small className="content-color s-to-right">Hasta 100 EXP</small>
				</div>
				<div className="container-item_divition s-cross-center guardian-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Guardian</h4>
					<small className="content-color s-to-right">Hasta 500 EXP</small>
				</div>
				<div className="container-item_divition s-cross-center cruzado-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Cruzado</h4>
					<small className="content-color s-to-right">Hasta 1500 EXP</small>
				</div>
				<div className="container-item_divition s-cross-center arconte-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Arconte</h4>
					<small className="content-color s-to-right">Hasta 3500 EXP</small>
				</div>
				<div className="container-item_divition s-cross-center leyenda-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Leyenda</h4>
					<small className="content-color s-to-right">Hasta 6500 EXP</small>
				</div>
				<div className="container-item_divition s-cross-center ancestral-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Ancestral</h4>
					<small className="content-color s-to-right">Hasta 8500 EXP</small>
				</div>
				<div className="container-item_divition s-cross-center divino-divition">
					<i className="container-icon-shieldRanking">
						<IconShield />
					</i>
					<h4 className="text-bold">Divino</h4>
					<small className="content-color s-to-right">Desde 8502 EXP</small>
				</div>
			</div>
		</div>
	)

}

export default ItemDivitionRanking;