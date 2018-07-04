import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default function configureStore(middlewares) {

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, ...middlewares)
  );

  return {
    store,
    persistor: persistStore(store)
  }
}
