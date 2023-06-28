/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast />
    </Provider>
  );
}

export default App;
