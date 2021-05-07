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
import {SET_RANDOM_PHRASE} from '../constants';
import List from '../components/List/List';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolBar from '../components/ToolBar/ToolBar';
import Textarea from '../components/Textarea/Textarea';
import NextButton from '../components/NextButton/NextButton';
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
export default ({
  route,
  navigation,
  categories,
  phrases,
  getRandomPhrase,
  randomPhrase,
}) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState('');
  const {catId, otherParam} = route.params;
  const category = categories.find(cat => cat.id === catId);
  const phrasesIds = category && category.phrasesIds;
  const [randomOptions, setRandomOptions] = useState([]);
  const [disableAllOptions, setDisableAllOptions] = useState(false);
  let newPhrases =
    phrases && phrases.filter(phrase => phrasesIds.includes(phrase.id));

  useEffect(() => {
    getRandomPhrase();
    if (newPhrases) {
      getRandomPhraseData(newPhrases, 3);
    }
  }, []);

  const makeAction = item => {
    setSelectedId(randomPhrase.id);
    setDisableAllOptions(true);
    if (item.id === randomPhrase.id) {
      item.isSelected = true;
    } else if (item.id !== randomPhrase.id) {
      item.isSelected = false;
    }
  };

  function getRandomPhraseData(array, number = 1) {
    setDisableAllOptions(false);
    const newRandomPhrase =
      newPhrases[Math.floor(Math.random() * newPhrases.length)];
    dispatch({
      type: SET_RANDOM_PHRASE,
      payload: newRandomPhrase,
    });

    const myRandomOptions = [newRandomPhrase];

    for (let i = 0; i < number; ) {
      const random = Math.floor(Math.random() * array.length);
      if (myRandomOptions.indexOf(array[random]) !== -1) {
        continue;
      }
      myRandomOptions.push(array[random]);
      i++;
    }

    setRandomOptions(
      myRandomOptions
        .map(opt => {
          delete opt.isSelected;
          return opt;
        })
        .sort(() => {
          return 0.5 - Math.random();
        }),
    );
  }

  function nextRandomPhraseData() {
    getRandomPhraseData(newPhrases, 3);
  }

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
              phrase={randomPhrase.name && randomPhrase.name[LANGUAGE_NAMES.EN]}
            />
          </View>
          <View>
            <View style={styles.heading}>
              <SectionHeading text="Pick a solution: " />
            </View>
            <List
              lang={LANGUAGE_NAMES.MG}
              data={randomOptions}
              text="Pick"
              color="#06B6D4"
              iconType="material-community"
              iconName="arrow-right"
              makeAction={makeAction}
              selectedId={selectedId}
              disableAllOptions={disableAllOptions}
            />
          </View>

          {disableAllOptions && (
            <View style={{marginTop: 45}}>
              <NextButton
                isDisabled={false}
                textColor="#FFFFFF"
                text="Next"
                onPress={nextRandomPhraseData}
              />
            </View>
          )}
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
