
// Importamos lo necesario de redux y redux-thunk para de esta manera usar el store
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Importamos nuestros reducers
import { rootReducers } from '../../reducers/rootReducers';

// Creamos una constante donde almacenaremos el uso de las herramientas de desarrollo Redux
const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

// Exportamos el store con nuestros reducers y Redux DevTools
export const store = createStore(
	rootReducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
)