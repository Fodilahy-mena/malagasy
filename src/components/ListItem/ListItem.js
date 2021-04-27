import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function SectionHeading({text}) {
  return (
    <SafeAreaView>
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});
