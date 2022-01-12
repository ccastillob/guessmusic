
import Swal from "sweetalert2";

import { types } from "../types/types";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

export const startLogin = ( email, password ) => {

	return async( dispatch ) => {
		const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
		const body = await resp.json();

		if( body.ok ) {

			localStorage.setItem('token', body.token );

			dispatch( login({
				uid: body.uid
			}) );

			dispatch( logged() );

		}else {
			Swal.fire( 'Error', body.msg, 'error' );
		}

	}

}

export const startRegister = ( name, lastName, email, password ) => {

	return async( dispatch ) => {
		const resp = await fetchSinToken( 'auth/new', { name, lastName, email, password }, 'POST' );
		const body = await resp.json();

		if( body.ok ) {

			localStorage.setItem('token', body.token );

			dispatch( login({
				uid: body.uid
			}) );

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

export const startChecking = () => {

	return async( dispatch ) => {
		const token = localStorage.getItem('token');

		if( !token ) {

			dispatch( notLogged() );
			dispatch( checkingFinish() );
			return false;

		}

		const resp = await fetchConToken( 'auth/renew' );
		const body = await resp.json();

		if( body.ok ) {

			localStorage.setItem( 'token', body.token );

			dispatch( login({
				uid: body.uid
			}) );

			dispatch( logged() );

		}else {

			dispatch( checkingFinish() );
			dispatch( notLogged() );

		}

	}

}

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
		dispatch( uiInitialState() );

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