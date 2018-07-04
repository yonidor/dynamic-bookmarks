import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';

export default function configureStore(middlewares) {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, ...middlewares)
  );
}
