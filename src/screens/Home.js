import React, {useState, useEffect} from 'react';
import {action} from '@storybook/addon-actions';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Active,
  StyleSheet,
} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';
import List from '../components/List/List';
import list from '../components/ListItem/list';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import AddIcon from '../components/ToolButton/assets/add.svg';
import CheckIcon from '../components/ToolButton/assets/check.svg';
import CheckAllIcon from '../components/ToolButton/assets/check-all.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';

function Switcher() {
  const [firstLanguage, setFirstLanguage] = useState(true);
  function switchLanguage() {
    setFirstLanguage(!firstLanguage);
  }

  return (
    <LanguageSwitcher
      firstLanguage={firstLanguage}
      LeftText="EN"
      RightText="MA"
      color="#FFFFFF"
      iconType=""
      iconName="swap-horiz"
      onPress={switchLanguage}
      iconSize={24}
    />
  );
}
export const Header = () => (
  <View style={styles.header}>
    <View style={styles.button}>
      <ToolButton onPress={action('clicked-add-button')}>
        <AddIcon width={24} height={24} fill="#FFFFFF" />
      </ToolButton>
    </View>
    <View style={styles.button}>
      <Switcher />
    </View>
    <View style={styles.button}>
      <ToolButton onPress={action('clicked-check-button')}>
        <CheckIcon width={24} height={24} fill="#FFFFFF" />
      </ToolButton>
    </View>
    <View style={styles.button}>
      <ToolButton onPress={action('clicked-check-all-button')}>
        <CheckAllIcon width={24} height={24} fill="#FFFFFF" />
      </ToolButton>
    </View>
    <View style={(styles.button, {marginRight: 0})}>
      <ToolButton onPress={action('clicked-mode-button')}>
        <ModeIcon width={24} height={24} fill="#FFFFFF" />
      </ToolButton>
    </View>
  </View>
);
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
      <Header />
      <List
        data={list}
        text={'Learn'}
        color="#06B6D4"
        iconType="material-community"
        iconName="arrow-right"
        onPress={() => {
          navigation.navigate('Learn', {
            item: item,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  button: {
    marginRight: 10,
  },
});
