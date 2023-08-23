// ========== App
// import all packages
import React from 'react';

// import all components
import {ReduxWrapper, NavigationWrapper} from './components';

const App: React.FC = () => {
  return (
    <ReduxWrapper>
      <NavigationWrapper />
    </ReduxWrapper>
  );
};

export default App;
