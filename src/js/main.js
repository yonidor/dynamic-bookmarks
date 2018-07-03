import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Link, goBack, goTo } from 'route-lite';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import rootReducer from './reducers/root-reducer';

import resetStyles from '../scss/reset.scss';
import appStyles from '../scss/app.scss';
import Page1 from './pages/Page1';

const store = configureStore();

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
            <Router>
                <Page1> </Page1>
            </Router>
        </Provider>
      );
    }
  }


ReactDOM.render(
    <App />,
    document.getElementById('react-app-container')
);