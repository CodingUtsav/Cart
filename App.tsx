import React from 'react';

import MyProduct from './componets/MyProduct';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MyProduct />
      </Provider>
    </>
  );
};

export default App;
