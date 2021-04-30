// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import { AppRegistry } from "react-native";

// import StorybookUIRoot from "./storybook";

// AppRegistry.registerComponent('learnGasy', () => StorybookUIRoot);

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Root from './Root';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import React from 'react';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
