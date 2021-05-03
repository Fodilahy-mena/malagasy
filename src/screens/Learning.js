import React, {useState, useEffect, useRef} from 'react';
import {action} from '@storybook/addon-actions';
import {useDispatch} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {SOLUTION_BUTTON_TEXT} from '../constants';
import List from '../components/List/List';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolBar from '../components/ToolBar/ToolBar';
import Textarea from '../components/Textarea/Textarea';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import BackIcon from '../components/ToolButton/assets/back.svg';
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
import {LANGUAGE_NAMES} from '../data/dataUtils';
export default ({route, navigation, categories, phrases, text}) => {
  const dispatch = useDispatch();
  const {catId, otherParam} = route.params;
  const category = categories.find(cat => cat.id === catId);
  const phrasesIds = category && category.phrasesIds;
  const newPhrases =
    phrases &&
    phrases.filter(phrase => phrasesIds.includes(phrase.id)).slice(0, 4);
  console.log('new phrases', newPhrases);
  var randomPhrase = newPhrases[Math.floor(Math.random() * newPhrases.length)];
  // console.log('randPhrase', randomPhrase.name[LANGUAGE_NAMES.EN]);
  useEffect(() => {
    dispatch({type: SOLUTION_BUTTON_TEXT, payload: 'Pick'});
  }, []);

  const makeAction = (item, index) => {
    if (item.id === randomPhrase.id) {
      dispatch({type: SOLUTION_BUTTON_TEXT, payload: 'Correct'});
    } else if (item.id !== randomPhrase.id) {
      dispatch({type: SOLUTION_BUTTON_TEXT, payload: 'Wrong'});
    } else {
      dispatch({type: SOLUTION_BUTTON_TEXT, payload: 'Pick'});
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{paddingHorizontal: 35, paddingVertical: 23}}>
          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <BackIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar button={<Switcher />} />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <ModeIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading text="Category: " />
            <Text>{category && category.name[LANGUAGE_NAMES.MG]}</Text>
          </View>
          <View style={styles.heading}>
            <SectionHeading text="The phrase: " />
          </View>
          <View style={{marginBottom: 37}}>
            <Textarea
              editable={false}
              phrase={randomPhrase.name[LANGUAGE_NAMES.EN]}
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading text="Pick a solution: " />
          </View>
          <List
            lang={LANGUAGE_NAMES.MG}
            data={newPhrases}
            text={text}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={makeAction}
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
    flexDirection: 'row',
  },
});
