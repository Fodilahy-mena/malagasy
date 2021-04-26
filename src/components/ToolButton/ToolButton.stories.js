import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import ToolButton from './ToolButton';
import AddIcon from './assets/add.svg';
import CheckIcon from './assets/check.svg';
import CheckAllIcon from './assets/check-all.svg';
import BackIcon from './assets/back.svg';
import ModeIcon from './assets/mode.svg';

storiesOf('Tool Button', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Add', () => (
    <ToolButton>
      <AddIcon width={48} height={48} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Check', () => (
    <ToolButton>
      <CheckIcon width={48} height={48} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Check all', () => (
    <ToolButton>
      <CheckAllIcon width={48} height={48} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Back', () => (
    <ToolButton>
      <BackIcon width={48} height={48} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Mode', () => (
    <ToolButton>
      <ModeIcon width={48} height={48} fill="#FFFFFF" />
    </ToolButton>
  ));
