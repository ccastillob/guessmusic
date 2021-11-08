import React from 'react'
import { useSelector } from 'react-redux'
import PrimaryButton from '../atoms/PrimaryButton'
import HeaderMenu from '../molecules/HeaderMenu'

const ErrorPage = () => {

	const { data: user } = useSelector(state => state.user)

	return (
		<>
		<HeaderMenu />
		<div className="ed-grid main-container container-errorpage">
			<h1 className="title-color s-center">PÁGINA NO ENCONTRADA</h1>
			<h3 className="content-color s-center">La página que estas buscando ya no está disponible</h3>
			<PrimaryButton link={ true } urlTo={`/profile/${ user?.username }`} title="Sácame de aqui" otherClass="s-to-center" />
		</div>
		</>
	)
}

export default ErrorPage
