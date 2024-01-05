import React from 'react';
import { Theme } from './themes/Theme';
import { GlobalStyles } from './themes/Style';
import { RoutesCall } from './routes';

export const App = () => {
    return (
      <Theme>
          <GlobalStyles />
          <RoutesCall />
      </Theme>
    );
}

export default App;
