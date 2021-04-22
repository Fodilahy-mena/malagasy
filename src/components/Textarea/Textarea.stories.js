
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Textarea from './Textarea';

storiesOf('Textarea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Textarea phrase', () => <Textarea label= {'Seen phrases:'} value={"Roa ambin’ny folo"}/>)
  .add('Textarea large phrase', () => <Textarea label= {'Seen phrases:'} value={"Roa ambin’ny folo ambin'ny zato sy arivo sy dimy alina sy telo hetsy"}/>)
  .add('Textarea input', () => <Textarea label= {'The phrase in English:'} placeholder={"Enter here"}/>)
  .add('Textarea large input', () => <Textarea label= {'The phrase in English:'} placeholder={"Enter here for example: Zato sy arivo ..."}/>)