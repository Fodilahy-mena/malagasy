import React, {useState, useEffect} from 'react';
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
  const {catId, otherParam} = route.params;
  const category = categories.find(cat => cat.id === catId);
  const phrasesIds = category && category.phrasesIds;

  const [randomPhraseId, setRandomPhraseId] = useState('');
  const [randomOptions, setRandomOptions] = useState([]);
  const [disableAllOptions, setDisableAllOptions] = useState(false);
  const [indexConter, setIndexCounter] = useState(0);

  // filter all the phrases based on the ids from found category
  // and mix them up streight away
  let newPhrases =
    phrases &&
    phrases
      .filter(phrase => phrasesIds.includes(phrase.id))
      .sort(() => Math.random() - 0.5);

  useEffect(() => {
    // functions to run the first time getting to learning screen
    getRandomPhrase();
    if (newPhrases) {
      getRandomPhraseData(newPhrases, 3);
    }
  }, []);

  // function for checking vallidate answers
  const makeAction = item => {
    if (item.id === randomPhrase.id) {
      item.isSelected = true;
    } else if (item.id !== randomPhrase.id) {
      item.isSelected = false;
    }
    setRandomPhraseId(randomPhrase.id);
    // this blocks user from recklicking on answer options
    setDisableAllOptions(true);
  };
  // if (indexConter >= newPhrases.length) {
  //   setDisableAllOptions(true);
  // }
  function getRandomPhraseData(array, number = 1) {
    // enables user to ckick on either of answer options
    setDisableAllOptions(false);
    // get objects from newPrases one at a time based on their index number
    setIndexCounter(indexConter + 1);
    const newRandomPhrase = newPhrases.find(
      (phrase, index) => index === indexConter,
    );
    // assigne the object that has an index number which is same as
    // indexConter to random phrase
    dispatch({
      type: SET_RANDOM_PHRASE,
      payload: newRandomPhrase,
    });
    // put newRandomPhrase as one of four objects in random options
    const myRandomOptions = [newRandomPhrase];
    // only push an object that is different from other objects
    // in the random options
    for (let i = 0; i < number; ) {
      const random = Math.floor(Math.random() * array.length);
      if (myRandomOptions.indexOf(array[random]) !== -1) {
        continue;
      }
      myRandomOptions.push(array[random]);
      i++;
    }

    setRandomOptions(
      // then assigne MyRandom options to random options
      // that will be displaied on the list
      // also mix the up together
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
  // get a new random phrase and new random phrase options
  // when ckicking next button
  function nextRandomPhraseData() {
    // reset the RandomPhraseId when clicking on next button so that
    // the color, text, icon of each item are back to default as the items are not clicked
    setRandomPhraseId('');
    getRandomPhraseData(newPhrases, 3);
  }
  // reshuffle when all the objects in the newPhrases array
  // have been called
  // reshuffling works by resetting the IndexCounter to 0
  // it won't get the same object as it got when starting because
  // of the sorting '.sort(()' in newPhrases
  function reshuffle() {
    setIndexCounter(0);
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
                    setIndexCounter(0);
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
              phrase={
                indexConter >= newPhrases.length
                  ? 'You have answered all the questions in this category'
                  : randomPhrase.name && randomPhrase.name[LANGUAGE_NAMES.EN]
              }
            />
          </View>
          {indexConter >= newPhrases.length == false && (
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
                randomPhraseId={randomPhraseId}
                disableAllOptions={disableAllOptions}
              />
            </View>
          )}

          {disableAllOptions && (
            <View style={{marginTop: 45}}>
              <NextButton
                isDisabled={false}
                textColor="#FFFFFF"
                text={'Next'}
                onPress={nextRandomPhraseData}
              />
            </View>
          )}
          {indexConter >= newPhrases.length && (
            <View style={{marginTop: 45}}>
              <NextButton
                isDisabled={false}
                textColor="#FFFFFF"
                text={'Reshuffle'}
                onPress={reshuffle}
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
