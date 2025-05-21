import toastReducer from '@encounter/redux/ducks/toast';
import encounterReducer from '@encounter/redux/ducks/encounter';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'encounter',
  storage,
  whitelist: ['encounter']
};

const rootReducer = combineReducers({
  toast: toastReducer,
  encounter: encounterReducer
});

export default persistReducer(persistConfig, rootReducer);
