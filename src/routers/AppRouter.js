
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

	return (
		<Router>
			<Switch>
				<PublicRoute
					path="/guessmusic"
					component={ AuthRouter }
					isLoggedIn={ true }
				/>
				<PrivateRoute
					path="/"
					component={ HomeRouter }
					isLoggedIn={ true }
				/>
				<Redirect to="/guessmusic/login" />
			</Switch>
		</Router>
	)

}