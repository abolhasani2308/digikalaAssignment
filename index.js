/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import {name as appName} from './app.json';
import App from './src/router/App';

AppRegistry.registerComponent(appName, () => App);
I18nManager.allowRTL(false);
