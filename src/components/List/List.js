import React from 'react';
import ListItem from '../ListItem/ListItem';
import {View, SafeAreaView, StyleSheet} from 'react-native';

export default function List({
  data,
  text,
  iconName,
  iconType,
  color,
  navigation,
}) {
  return (
    <SafeAreaView>
      <View style={styles.list}>
        <ListItem
          data={data}
          text={text}
          text={text}
          color={color}
          iconType={iconType}
          iconName={iconName}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});
