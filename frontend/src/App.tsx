import React from 'react';
import { Theme } from './themes/Theme';
import { GlobalStyles } from './themes/Style';
import Home from './home/Home';

export const App = () => {
    return (
      <Theme>
          <GlobalStyles />
          <Home />
      </Theme>
    );
}

export default App;
