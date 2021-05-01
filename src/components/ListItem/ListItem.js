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
export function VirtualizedView() {
  return (
    <SectionList
      sections={[{data: data}]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
export default function ListItem({
  navigation,
  data,
  text,
  iconName,
  iconType,
  color,
  lang,
}) {
  return (
    <SafeAreaView>
      <SectionList
        sections={[{data: data}]}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('Learn', {
                catId: item.id,
                otherParam: 'anything you want here',
              });
            }}>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.text}>
                {item.name[lang]}
              </Text>
            </View>
            <ActionButton
              onPress={() => {
                navigation.navigate('Learn', {
                  catId: item.id,
                  otherParam: 'anything you want here',
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
    maxWidth: 249,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
