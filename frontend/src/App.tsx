import React from 'react';
import { Theme } from './themes/theme';
import { GlobalStyles } from './themes/style';

export const App = () => {
  return (
    <Theme>
        <GlobalStyles />
    </Theme>
  );
}

export default App;
