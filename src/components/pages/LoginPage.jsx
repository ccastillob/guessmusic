
import React from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import IconEmail from '../icons/IconEmail'
import IconEyeOpen from '../icons/IconEyeOpen'
import IconLogo from '../icons/IconLogo'
import IconPassword from '../icons/IconPassword'

const LoginPage = () => {
	return (
		<div className="ed-grid s-grid-12 container-login ">
			<form type="submit" className="login-content ed-grid s-grid-6">
				<div className="content-logoLogin s-cols-6">
					<i className="container-icon-logoLogin primary-color">
						<IconLogo />
					</i>
				</div>
				<h1 className="title-color s-center s-cols-6">GuessMusic</h1>
				<div className="content-inputEmailLogin">
					<i className="container-icon-emailLogin content-color">
						<IconEmail />
					</i>
					<input type="text" name="email" placeholder="Correo electrónico" className="content-color inputEmailLogin" autoComplete="off" />
				</div>
				<div className="content-inputPasswordLogin">
					<i className="container-icon-passwordLogin content-color">
						<IconPassword />
					</i>
					<input type="password" name="password" placeholder="Contraseña" className="content-color inputPasswordLogin"  autoComplete="off" />
					<i className="container-icon-eyesLogin">
						<IconEyeOpen />
					</i>
				</div>
				<div className="content-button__login">
					<PrimaryButton title="Inicia sesión" />
				</div>
				<h3 className="content-color s-center s-cols-6">¿No tienes una cuenta? <span className="span_login text-bold">Registrate</span></h3>
			</form>
		</div>
	)
}

export default LoginPage
