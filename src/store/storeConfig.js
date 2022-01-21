import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeReducer from './reducers/home';
import UI from './reducers/ui';

const rootReducer = combineReducers ({
  home: HomeReducer,
  ui: UI,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['ui,home'],
};

const middleware = applyMiddleware (thunk);

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer (persistConfig, rootReducer);
export const STORE = createStore (
  persistedReducer,
  composeEnhancers (middleware)
);
export const PERSISTOR = persistStore (STORE);
