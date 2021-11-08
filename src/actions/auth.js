
// Importamos la libreria para alertas
import Swal from "sweetalert2";

// Importamos los tipos
import { types } from "../types/types";

// Importamos las funcionalidades para el fetch
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

// Exportamos y creamos una acción asincrona para cuando el usuario se logea
// Esta acción se conectará con otra acción sincrona
export const startLogin = ( email, password ) => {

	return async( dispatch ) => {
		const resp = await fetchSinToken( 'auth', { email, password }, 'POST' )
		const body = await resp.json();

		if( body.ok ) {
			localStorage.setItem('token', body.token );
			// localStorage.setItem('access', body.accessToken );
			// localStorage.setItem('refresh', body.refreshToken );

			dispatch( login({
				uid: body.uid,

			}) )

			dispatch( logged() );

		}else {
			Swal.fire( 'Error', body.msg, 'error' );
		}

	}

}

// Exportamos y creamos una acción asincrona para cuando el usuario se registra
// Esta acción se conectará con otra acción sincrona
export const startRegister = ( name, lastName, email, password ) => {

	return async( dispatch ) => {
		const resp = await fetchSinToken( 'auth/new', { name, lastName, email, password }, 'POST' )
		const body = await resp.json();

		if( body.ok ) {
			localStorage.setItem('token', body.token );
			// localStorage.setItem('access', body.accessToken );
			// localStorage.setItem('refresh', body.refreshToken );

			dispatch( login({
				uid: body.uid,
			}) )

			dispatch( logged() );

		}else {

			if( body?.errors ) {

				return Swal.fire({
					position: 'center',
					icon: 'warning',
					title: "Formato de correo no válido",
				});

			}

			return Swal.fire( 'Error', body.msg, 'error' );

		}

	}

}

// Exportamos y creamos una acción asincrona para cuando el usuario recarga el navegador
// Esta acción se conectará con otra acción sincrona
export const startChecking = () => {

	return async( dispatch ) => {

		const token = localStorage.getItem('token');

		// Validamos la existencia del token
		if( !token ) {

			dispatch( notLogged() );
			dispatch( checkingFinish() );
			return false;

		}

		const resp = await fetchConToken( 'auth/renew' );
		const body = await resp.json();

		if( body.ok ) {

			localStorage.setItem( 'token', body.token );
			// localStorage.setItem('access', body.accessToken );
			// localStorage.setItem('refresh', body.refreshToken );

			dispatch( login({
				uid: body.uid,
			}) );

			dispatch( logged() );

		}else {

			dispatch( checkingFinish() );
			dispatch( notLogged() );
		}

	}

}

// Exportamos y creamos una acción asincrona para cuando el usuario cierra sesión
// Esta acción se conectará con otra acción sincrona
export const startLogout = () => {

	return ( dispatch ) => {

		localStorage.clear();
		dispatch( logout() );
		dispatch( userClear() );
		dispatch( notLogged() );
		dispatch( chatUsersClear() );
		dispatch( profileClear() );
		dispatch( notificationClear() );
		dispatch( categorieClear() );
		dispatch( uiInitialState() )

	}

}

const logout = () => ({
	type: types.authLogout
})

const checkingFinish = () => ({
	type: types.authCheckingFinish
})

const login = ( user ) => ({
	type: types.authLogin,
	payload: user
})

const userClear = () => ({
	type: types.userClearData
})

const logged = () => ({
	type: types.authLogged
})

const notLogged = () => ({
	type: types.authNotLogged
})

const chatUsersClear = () => ({
	type: types.usersChatSubscriptionsClear
})

const profileClear = () => ({
	type: types.userClearDataProfile
})

const notificationClear = () => ({
	type: types.clearNotification
})

const categorieClear = () => ({
	type: types.clearCategories
})

const uiInitialState = () => ({
	type: types.uiCloseEditModal
})