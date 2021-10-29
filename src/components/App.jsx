
import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from '../routers/AppRouter';
import { store } from './store/store';
import { SocketProvider } from '../context/SocketContext';

import "../scss/styles.scss";

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
