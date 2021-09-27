
import React, { useState } from 'react'

import IconEyeClose from '../components/icons/IconEyeClose';
import IconEyeOpen from '../components/icons/IconEyeOpen';

/* Exportamos este hook que nos servira para el input de password(icono de ojo)
 Devuelve 2 valores:
 * inputType: texto que devolverá texto o password dependiendo del valor de visible(boolean)
 * icono: es una etiqueta html <i> que devolverá un componente IconEyeOpen/IconEyeClose dependiendo del valor de visible(boolean) y cambiará al ser pulsado
*/
export const usePasswordToggle = () => {

	const [visible, setVisible] = useState(false);

	const icono = (
		<i
			className="container-icon-eyesLogin"
			onClick={ () => setVisible(!visible) }
		>
			{
				visible ? (
					<IconEyeClose />
					) : (
					<IconEyeOpen />
				)
			}
		</i>
	)

	const inputType = visible ? "text" : "password";

	return [ inputType, icono ];

}

