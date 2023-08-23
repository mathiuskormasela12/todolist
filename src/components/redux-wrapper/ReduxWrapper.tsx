// ========== Redux Wrapper
// import all packages
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../../redux/store';

export const ReduxWrapper: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
