import { configureStore ,combineReducers,applyMiddleware} from '@reduxjs/toolkit';
import { todos } from './Todos/reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {thunk} from   'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
  todos,
  
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducers = combineReducers(reducers);

const persistReducer1 = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistReducer1,}, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;