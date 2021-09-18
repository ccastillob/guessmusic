
import React from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import IconEmail from '../icons/IconEmail'
import IconEyeClose from '../icons/IconEyeClose'
import IconEyeOpen from '../icons/IconEyeOpen'
import IconLogo from '../icons/IconLogo'
import IconPassword from '../icons/IconPassword'
import IconUser from '../icons/IconUser'

const RegisterPage = () => {
	return (
		<div className="ed-grid s-grid-12 container-register">
			<form type="submit" className="register-content ed-grid s-grid-6">
				<div className="content-logoRegister s-cols-6">
					<i className="container-icon-logoRegister primary-color">
						<IconLogo />
					</i>
				</div>
				<h1 className="title-color s-center s-cols-6">GuessMusic</h1>
				<div className="content-inputUsernameRegister">
					<i className="container-icon-usernameRegister content-color">
						<IconUser />
					</i>
					<input type="text" name="username" placeholder="Nombre usuario" className="content-color inputUsernameRegister" autoComplete="off" />
				</div>
				<div className="content-inputLastnameRegister">
					<i className="container-icon-lastnameRegister content-color">
						<IconUser />
					</i>
					<input type="text" name="lastname" placeholder="Apellido usuario" className="content-color inputLastnameRegister" autoComplete="off" />
				</div>
				<div className="content-inputEmailRegister">
					<i className="container-icon-emailRegister content-color">
						<IconEmail />
					</i>
					<input type="text" name="email" placeholder="Correo electrónico" className="content-color inputEmailRegister" autoComplete="off" />
				</div>
				<div className="content-inputPasswordRegister">
					<i className="container-icon-passwordRegister content-color">
						<IconPassword />
					</i>
					<input type="password" name="password" placeholder="Contraseña" className="content-color inputPasswordRegister"  autoComplete="off" />
					<i className="container-icon-eyesRegister">
						<IconEyeOpen />
					</i>
				</div>
				<div className="content-inputRePasswordRegister">
					<i className="container-icon-repasswordRegister content-color">
						<IconPassword />
					</i>
					<input type="password" name="repassword" placeholder="Repetir contraseña" className="content-color inputRePasswordRegister"  autoComplete="off" />
					<i className="container-icon-eyesRegister">
						<IconEyeClose />
					</i>
				</div>
				<div className="content-button__register">
					<PrimaryButton title="Registrarse" />
				</div>
				<h3 className="content-color s-center s-cols-6">¿Ya tienes una cuenta? <span className="span_register text-bold">Inicia sesión</span></h3>
			</form>
		</div>
	)
}

export default RegisterPage
