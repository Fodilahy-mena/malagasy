import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, View} from 'react-native';

export default function ToolBar({button}) {
  return (
    <View style={styles.header}>
      <View style={styles.button}>{button}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 10,
  },
});
