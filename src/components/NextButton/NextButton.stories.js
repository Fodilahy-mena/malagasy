import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from './NextButton';

storiesOf('Buttons', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Next button', () => (
    <Button isSisabled={false} onPress={action('clicked-text')}>
      <Text style={
        {color: '#FFFFFF', fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,}}>Next</Text>
    </Button>
  ))
  .add('Next button long text', () => (
    <Button isSisabled={false} onPress={action('clicked-text')}>
      <Text style={
        {color: '#FFFFFF', fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,}}>Next phrase</Text>
    </Button>
  ))
  .add('Add button', () => (
    <Button isDisabled={true} onPress={action('clicked-text')}>
      <Text style={
        {color: '#06B6D4', fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,}}>Add</Text>
    </Button>
  ))
  .add('Add button long text', () => (
    <Button isDisabled={true} onPress={action('clicked-text')}>
      <Text style={
        {color: '#06B6D4', fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,}}>Add a phrase</Text>
    </Button>
  ))
