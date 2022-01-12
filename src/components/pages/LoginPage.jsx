
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { usePasswordToggle } from '../../hooks/usePasswordToggle';
import PrimaryButton from '../atoms/PrimaryButton';
import IconEmail from '../icons/IconEmail';
import IconLogo from '../icons/IconLogo';
import IconPassword from '../icons/IconPassword';

const LoginPage = () => {

	const dispatch = useDispatch();

	const [ formLoginValues, handleLoginInputChange ] = useForm({
		lEmail: '',
		lPassword: '',
	});

	const { lEmail, lPassword } = formLoginValues;

	const [ passwordInputType, toggleIcon ] = usePasswordToggle();

	const handleLogin = (e) => {

		e.preventDefault();
		dispatch( startLogin( lEmail, lPassword ) );

	}

	const disabledButton = () => {
		return (lEmail.length > 0 && lPassword.length > 0) ? true : false;
	}

	return (
		<div className="ed-grid s-grid-12 container-login ">
			<form onSubmit={ handleLogin } className="login-content ed-grid s-grid-6">
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
					<input
						type="text"
						name="lEmail"
						placeholder="Correo electrónico"
						className="content-color inputEmailLogin"
						autoComplete="off"
						value={ lEmail }
						onChange={ handleLoginInputChange }
					/>
				</div>
				<div className="content-inputPasswordLogin">
					<i className="container-icon-passwordLogin content-color">
						<IconPassword />
					</i>
					<input
						type={ passwordInputType }
						name="lPassword"
						placeholder="Contraseña"
						className="content-color inputPasswordLogin"
						autoComplete="off"
						value={ lPassword }
						onChange={ handleLoginInputChange }
					/>
					{ toggleIcon }
				</div>
				<div className="content-button__login">
					<PrimaryButton btnDisabled={ !disabledButton() } title="Inicia sesión" btn={true} />
				</div>
				<h3 className="content-color s-center s-cols-6">¿No tienes una cuenta? <Link to="/guessmusic/register" className="span_login text-bold">Registrate</Link></h3>
			</form>
		</div>
	)

}

export default LoginPage;
