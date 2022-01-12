
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import RegisterPage from '../components/pages/RegisterPage';

export const AuthRouter = () => {
	return (
		<Switch>
			<Route
				exact
				path="/guessmusic/login"
				component={ LoginPage }
			/>
			<Route
				exact
				path="/guessmusic/register"
				component={ RegisterPage }
			/>
			<Redirect to="/guessmusic/login" />
		</Switch>
	)
}