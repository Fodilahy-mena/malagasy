import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import ToolButton from './ToolButton';

storiesOf('Tool Button', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Add', () => <ToolButton />)
  .add('Check', () => <ToolButton color="#FFFFFF" />)
  .add('Check all', () => <ToolButton color="#FFFFFF" />)
  .add('Check', () => <ToolButton color="#FFFFFF" />)
  .add('Setting', () => <ToolButton color="#FFFFFF" />);
