
import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from '../routers/AppRouter';
import { store } from './store/store';
import { SocketProvider } from '../context/SocketContext';
import moment from 'moment';
import 'moment/locale/es';

import "../scss/styles.scss";

moment.locale('es');

const App = () => {

  return (
		<Provider store={ store }>
			<SocketProvider>
				<AppRouter />
			</SocketProvider>
		</Provider>
  );
}

export default App;
