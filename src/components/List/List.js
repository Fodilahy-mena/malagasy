import React from 'react';
import ListItem from '../ListItem/ListItem';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

export default function List({data, text, iconName, iconType, color}) {
  return (
    <SafeAreaView>
      <View style={styles.list}>
        <ListItem
          itemAdditionalStyle={styles.itemAdditionalStyle}
          data={data}
          text={text}
          text={text}
          color={color}
          iconType={iconType}
          iconName={iconName}
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
  itemAdditionalStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});
