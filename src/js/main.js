import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Link, goBack, goTo } from 'route-lite';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import rootReducer from './reducers/root-reducer';

import resetStyles from '../scss/reset.scss';
import appStyles from '../scss/app.scss';

import UrlsListPage from './pages/UrlsListPage';

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore([sagaMiddleware]);

sagaMiddleware.run(mySaga);

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
            <Router>
                <UrlsListPage> </UrlsListPage>
            </Router>
        </Provider>
      );
    }
  }


ReactDOM.render(
    <App />,
    document.getElementById('react-app-container')
);