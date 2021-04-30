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

export const Separator = () => <View style={styles.separator} />;

export default function ListItem({
  navigation,
  data,
  text,
  iconName,
  iconType,
  color,
}) {
  return (
    <SafeAreaView>
      <SectionList
        sections={[{data: data}]}
        renderItem={({item}, index) => (
          <TouchableOpacity
            style={styles.item}
            onPress={item => {
              navigation.navigate('Learn', {
                item: item,
              });
            }}>
            <View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <ActionButton
              onPress={item => {
                console.log('item', item);
                navigation.navigate('Learn', {
                  item: item,
                });
              }}
              text={text}
              color={color}
              iconType={iconType}
              iconName={iconName}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
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
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
