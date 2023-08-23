// ========== Root Reducer
// import all packages
import {combineReducers} from '@reduxjs/toolkit';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

// import all reducers
import counterSlice from './counter/counter.slice';

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['counterReducer'],
};

const rootReducer = combineReducers({
  counterReducer: counterSlice,
});

export default persistReducer(rootPersistConfig, rootReducer);
