import toastReducer from '@encounter/redux/ducks/toast';
import encounterReducer from '@encounter/redux/ducks/encounter';
import { combineReducers } from 'redux';
import { type WebStorage, persistReducer } from 'redux-persist';

const createNoopStorage: () => WebStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    }
  };
};

const storage: WebStorage = createNoopStorage();

const persistConfig = {
  key: 'encounter',
  storage: storage,
};

const rootReducer = combineReducers({
  toast: toastReducer,
  encounter: encounterReducer
});

export default persistReducer(persistConfig, rootReducer);
