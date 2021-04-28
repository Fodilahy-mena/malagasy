import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  SectionList,
} from 'react-native';

export default function ListItem({data, text, iconName, iconType, color}) {
  function onRowPressLearn() {
    console.log('Pressed to learn screen');
  }

  function onRowPressAnswer() {
    console.log('Pressed to check the answer');
  }

  return (
    <SafeAreaView>
      <SectionList
        sections={[{data: data}]}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={text === 'Learn' ? onRowPressLearn : onRowPressAnswer}>
            <View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <ActionButton
              onPress={text === 'Learn' ? onRowPressLearn : onRowPressAnswer}
              text={text}
              color={color}
              iconType={iconType}
              iconName={iconName}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    paddingLeft: 16,
    paddingRight: 20,
    paddingVertical: 17,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});
