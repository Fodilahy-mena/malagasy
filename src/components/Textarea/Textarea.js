// components/Task.js
import * as React from 'react';
import {useState} from 'react';
import { SafeAreaView, View, StyleSheet,TextInput } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({label, placeholder, value}) {
  const [inputText, setInputText] = useState('')

  const enterText = (text) => {
    setInputText(text)
  }

  return (
    <SafeAreaView >
      {/* The Textareas from stories are nendered differently 
      and they have different props*/} 
      <View style={styles.container}>
        {value ?
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          multiline = {true}
          // ways of disabling the input
          editable={false}
          selectTextOnFocus={false}
        /> 
        : 
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={text => enterText(text)}
          defaultValue={inputText}
          multiline = {true}
        />
        }
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 23,
    },
    input: {
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: 41,
        paddingBottom: 35,
        borderRadius: 3,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        lineHeight: 24,
        color: '#111827',
    },

})