
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { usePasswordToggle } from '../../hooks/usePasswordToggle';
import PrimaryButton from '../atoms/PrimaryButton';
import IconEmail from '../icons/IconEmail';
import IconLogo from '../icons/IconLogo';
import IconPassword from '../icons/IconPassword';
import IconUser from '../icons/IconUser';

const RegisterPage = () => {

	const dispatch = useDispatch();

	const [ formRegisterValues, handleRegisterInputChange ] = useForm({
		rFirstname: '',
		rLastname: '',
		rEmail: '',
		rPassword: '',
		rRePassword: '',
	});

	const { rFirstname, rLastname, rEmail, rPassword, rRePassword } = formRegisterValues;
	const [ passwordInputType, toggleIcon ] = usePasswordToggle();
	const [ repasswordInputType, toggleReIcon ] = usePasswordToggle();

	const handleRegister = (e) => {

		e.preventDefault();

		if( rPassword !== rRePassword ) {

			return Swal.fire({
				position: 'center',
				icon: 'warning',
				title: "Las contraseñas deben ser iguales",
			});

		}

		Swal.fire({
			title: 'Registrando datos',
			text: 'Por favor espere...',
			allowOutsideClick: false,
			didOpen: () => {
					Swal.showLoading()
			},
		});

		dispatch( startRegister( rFirstname, rLastname, rEmail, rPassword ) );

		Swal.close();

	}

	const disabledButton = () => {
		return ( rFirstname.length > 2 && rLastname.length > 2 && rEmail.length > 0 && rPassword.length > 0 && rRePassword.length > 0 ) ? true : false;
	}

	return (
		<div className="ed-grid s-grid-12 container-register">
			<form onSubmit={ handleRegister } className="register-content ed-grid s-grid-6">
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
					<input
						type="text"
						name="rFirstname"
						placeholder="Nombre usuario"
						className="content-color inputUsernameRegister"
						autoComplete="off"
						maxLength= "12"
						value={ rFirstname }
						onChange={ handleRegisterInputChange }
					/>
				</div>
				<div className="content-inputLastnameRegister">
					<i className="container-icon-lastnameRegister content-color">
						<IconUser />
					</i>
					<input
						type="text"
						name="rLastname"
						placeholder="Apellido usuario"
						className="content-color inputLastnameRegister"
						autoComplete="off"
						maxLength= "12"
						value={ rLastname }
						onChange={ handleRegisterInputChange }
					/>
				</div>
				<div className="content-inputEmailRegister">
					<i className="container-icon-emailRegister content-color">
						<IconEmail />
					</i>
					<input
						type="text"
						name="rEmail"
						placeholder="Correo electrónico"
						className="content-color inputEmailRegister"
						autoComplete="off"
						value={ rEmail }
						onChange={ handleRegisterInputChange }
					/>
				</div>
				<div className="content-inputPasswordRegister">
					<i className="container-icon-passwordRegister content-color">
						<IconPassword />
					</i>
					<input
						type={passwordInputType}
						name="rPassword"
						placeholder="Contraseña"
						className="content-color inputPasswordRegister"
						autoComplete="off"
						value={ rPassword }
						onChange={ handleRegisterInputChange }
					/>
					{ toggleIcon }
				</div>
				<div className="content-inputRePasswordRegister">
					<i className="container-icon-repasswordRegister content-color">
						<IconPassword />
					</i>
					<input
						type={repasswordInputType}
						name="rRePassword"
						placeholder="Repetir contraseña"
						className="content-color inputRePasswordRegister"
						autoComplete="off"
						value={ rRePassword }
						onChange={ handleRegisterInputChange }
					/>
					{ toggleReIcon }
				</div>
				<div className="content-button__register">
					<PrimaryButton btnDisabled={ !disabledButton() } title="Registrarse" btn={true} />
				</div>
				<h3 className="content-color s-center s-cols-6">¿Ya tienes una cuenta? <Link to="/guessmusic/login" className="span_register text-bold">Inicia sesión</Link></h3>
			</form>
		</div>
	)

}

export default RegisterPage;
