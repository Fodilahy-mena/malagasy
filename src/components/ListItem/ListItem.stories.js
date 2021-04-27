import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('List Item', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Item', () => <ListItem text={'At the restaurant'} />);
