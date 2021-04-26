import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import AddIcon from './assets/add.svg';
export default function ToolButton({
  onPress,
  color,
  iconType,
  iconName,
  children,
}) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#E5E5E5"
      onPress={onPress}>
      <View style={styles.button}>
        <AddIcon width={48} height={48} fill={color} />
      </View>
    </TouchableHighlight>
  );
}

ToolButton.defaultProps = {
  onPress: () => {},
};

ToolButton.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
    width: 'auto',
    alignSelf: 'center',
    // padding: 13,
    borderRadius: 100,
    backgroundColor: '#06B6D4',
    alignItems: 'center',
  },
  button: {
    margin: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },
});
