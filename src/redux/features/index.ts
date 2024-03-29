// ========== Root Reducer
// import all packages
import {combineReducers} from '@reduxjs/toolkit';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

// import all reducers
import tasksSlice from './tasks/tasks.slice';

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['tasksReducer'],
};

const rootReducer = combineReducers({
  tasksReducer: tasksSlice,
});

export default persistReducer(rootPersistConfig, rootReducer);
