
// Exportamos y creamos los tipos que utilizaremos para mostrar cuando se realiza una acción
export const types = {

	authCheckingFinish: '[auth] Finish checking login state',
	authLogin: '[auth] Start Login',
	authLogout: '[auth] Logout user',
	authLogged: '[auth] Logged app',
	authNotLogged: '[auth] Not logged app',

	userData:'[user] User data loaded',
	userClearData: '[user] User clear data',
	userFollowings: '[user] User followings loaded',
	userFollowers: '[user] User followers loaded',

	usersChatSubscriptions: '[chat] Users Friends',
	usersChatSubscriptionsClear: '[chat] Users Friends clear data',
	activeChat: '[chat] Active chat',
	clearActiveChat: '[chat] Clear active chat',
	newMessage: '[chat] New message',
	loadingMessages: '[chat] Loading messages',

	userDataProfile: '[profile] User data profile loaded',
	userClearDataProfile: '[profile] User clear data profile',
	userFollowingsProfile: '[profile] User followings profile loaded',
	userFollowersProfile: '[profile] User followers profile loaded',
	userAchievementsProfile: '[profile] User achievements profile loaded',
	userCategoriesProfile: '[profile] User categories profile loaded',

	loadingNotifications: '[notification] Loading notifications',
	clearNotification: '[notification] Clear notification',
	newNotification: '[notification] New notification',
	confirmNotification: '[notification] Confirm state of notification',
	cancelNotification: '[notification] Cancel state of notification',

	loadingCategories: '[categorie] Loading categories',
	clearCategories: '[categorie] Clear categories',

	uiOpenEditModal: '[ui] Open edit modal',
	uiCloseEditModal: '[ui] Close edit modal',

}