
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ListAchievementsPage from '../components/pages/ListAchievementsPage';
import CategoriesPage from '../components/pages/CategoriesPage';
import ChatPage from '../components/pages/ChatPage';
import FollowersPage from '../components/pages/FollowersPage';
import FollowingsPage from '../components/pages/FollowingsPage';
import HomePage from '../components/pages/HomePage';
import NotificationsPage from '../components/pages/NotificationsPage';
import RankingPage from '../components/pages/RankingPage';
import ScreenFinishClassic from '../components/pages/ScreenFinishClassic';
import ScreenGameClassic from '../components/pages/ScreenGameClassic';
import SelectProfilePage from '../components/pages/SelectProfilePage';
import ErrorPage from '../components/pages/ErrorPage';

export const HomeRouter = () => {
	return (
		<Switch>
			<Route
				exact
				path="/ranking"
				component={ RankingPage }
			/>
			<Route
				exact
				path="/categories"
				component={ CategoriesPage }
			/>
			<Route
				exact
				path="/notifications"
				component={ NotificationsPage }
			/>
			<Route
				exact
				path="/chat"
				component={ ChatPage }
			/>
			<Route
				exact
				path="/profile/:username/achievements"
				component={ ListAchievementsPage }
			/>
			<Route
				exact
				path="/profile/:username/followings"
				component={ FollowingsPage }
			/>
			<Route
				exact
				path="/profile/:username/followers"
				component={ FollowersPage }
			/>
			<Route
				exact
				path="/profile/:username"
				component={ SelectProfilePage }
			/>
			<Route
				exact
				path="/playing/:idLevel/classic"
				component={ ScreenGameClassic }
			/>
			<Route
				exact
				path="/results/classic"
				component={ ScreenFinishClassic }
			/>
			<Route
				exact
				path="/error"
				component={ ErrorPage }
			/>
			<Route
				exact
				path="/"
				component={ HomePage }
			/>
			<Redirect to="/" />
		</Switch>
	)
}