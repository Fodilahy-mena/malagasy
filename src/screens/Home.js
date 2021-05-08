import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {action} from '@storybook/addon-actions';
import {LANGUAGE_NAMES} from '../data/dataUtils';
import {SET_LANGUAGE_NAME} from '../constants';

import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import List from '../components/List/List';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolBar from '../components/ToolBar/ToolBar';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import AddIcon from '../components/ToolButton/assets/add.svg';
import CheckIcon from '../components/ToolButton/assets/check.svg';
import CheckAllIcon from '../components/ToolButton/assets/check-all.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';

function Switcher({getLanguageName, nativeLanguage}) {
  const dispatch = useDispatch();
  useEffect(() => {
    getLanguageName();
  }, []);
  console.log(nativeLanguage);
  const [firstLanguage, setFirstLanguage] = useState(true);
  function switchLanguage() {
    setFirstLanguage(!firstLanguage);
    dispatch({
      type: SET_LANGUAGE_NAME,
      payload: firstLanguage === true ? LANGUAGE_NAMES.MG : LANGUAGE_NAMES.EN,
    });
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

export default ({
  navigation,
  getCategories,
  categories,
  getPhrases,
  getLanguageName,
  nativeLanguage,
}) => {
  useEffect(() => {
    getCategories();
    getPhrases();
  }, []);

  // a function on each items that navigates to Learn screen
  // set and pass category parameter which is the category id
  const makeAction = item => {
    navigation.navigate('Learn', {
      catId: item.id,
      otherParam: 'anything you want here',
    });
  };

  console.log('lang', nativeLanguage);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{paddingHorizontal: 35, paddingVertical: 23}}>
          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <AddIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <Switcher
                  getLanguageName={getLanguageName}
                  nativeLanguage={nativeLanguage}
                />
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckAllIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <ModeIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading text="Select a category:" />
          </View>
          <List
            lang={nativeLanguage}
            data={categories}
            text={'Learn'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={makeAction}
          />
          <View style={styles.heading}>
            <SectionHeading text="Seen phrases:" />
          </View>
          <List
            data={[{id: 1, name: '35 words and phrases'}]}
            text={'Learn'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={() => {}}
          />
          <View style={styles.heading}>
            <SectionHeading text="Learnt phrases:" />
          </View>
          <List
            data={[{id: 2, name: '10 words and phrases'}]}
            text={'Learn'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={() => {}}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingBottom: 56,
  },
  heading: {
    paddingBottom: 15,
  },
});
