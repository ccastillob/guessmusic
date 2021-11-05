
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Redirect
} from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { loadingCategories } from '../actions/categorie';
import { startUserData, startUserFollowersByID, startUserFollowingsByID } from '../actions/user';
import LoadingPage from '../components/pages/LoadingPage';

import { ScrollToTop } from '../helpers/scrollToTop';
import { AuthRouter } from './AuthRouter';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

	const dispatch = useDispatch();
	const { checking, uid } = useSelector( state => state.auth );

	useEffect(() => {

		dispatch( startChecking() )

	}, [dispatch])

	useEffect(() => {

		if( uid ) {
			dispatch( startUserData(uid) )
			dispatch( startUserFollowingsByID(uid) )
			dispatch( startUserFollowersByID(uid) )
			dispatch( loadingCategories(uid) )
		}

	}, [dispatch, uid])

	if( checking ) {
		// TODO: AGREGAR UN LOADING
		return <LoadingPage />
	}

	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<PublicRoute
					path="/guessmusic"
					component={ AuthRouter }
					isLoggedIn={ !!uid }
				/>
				<PrivateRoute
					path="/"
					component={ HomeRouter }
					isLoggedIn={ !!uid }
				/>
				<Redirect to="/guessmusic/login" />
			</Switch>
		</Router>
	)

}