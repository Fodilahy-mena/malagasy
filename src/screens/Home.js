import React, {useState, useEffect} from 'react';
import {action} from '@storybook/addon-actions';
import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';
import List from '../components/List/List';
import list from '../components/ListItem/list';
import ToolBar from '../components/ToolBar/ToolBar';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import AddIcon from '../components/ToolButton/assets/add.svg';
import CheckIcon from '../components/ToolButton/assets/check.svg';
import CheckAllIcon from '../components/ToolButton/assets/check-all.svg';
import BackIcon from '../components/ToolButton/assets/back.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';

export default ({navigation}) => {
  //   if (loading) {
  //     return (
  //       <SafeAreaView>
  //         <ActivityIndicator size="large" />
  //       </SafeAreaView>
  //     );
  //   }

  return (
    <View>
      <ToolBar
        button={
          <ToolButton onPress={action('clicked-add-button')}>
            <AddIcon width={24} height={24} fill="#FFFFFF" />
          </ToolButton>
        }
      />
      <ToolBar
        button={
          <ToolButton onPress={action('clicked-add-button')}>
            <AddIcon width={24} height={24} fill="#FFFFFF" />
          </ToolButton>
        }
      />
      <List
        data={list}
        text={'Learn'}
        color="#06B6D4"
        iconType="material-community"
        iconName="arrow-right"
        navigation={navigation}
      />
    </View>
  );
};
