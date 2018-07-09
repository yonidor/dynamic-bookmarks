import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({ realtime: true });

export default function configureStore(middlewares) {

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, ...middlewares))
  );

  return {
    store,
    persistor: persistStore(store)
  }
}
