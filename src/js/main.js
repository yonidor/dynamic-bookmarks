import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Link, goBack, goTo } from 'route-lite';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'

import configureStore from './store/configureStore';
import rootReducer from './reducers/root-reducer';

import resetStyles from '../scss/reset.scss';
import appStyles from '../scss/app.scss';

import BookmarksListPage from './pages/BookmarksListPage';

const sagaMiddleware = createSagaMiddleware();

const { store, persistor } = configureStore([sagaMiddleware]);

sagaMiddleware.run(mySaga);

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <BookmarksListPage> </BookmarksListPage>
                </Router>
            </PersistGate>
        </Provider>
      );
    }
  }


ReactDOM.render(
    <App />,
    document.getElementById('react-app-container')
);