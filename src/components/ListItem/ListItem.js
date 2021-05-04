import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  SectionList,
  VirtualizedList,
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
  makeAction,
  data,
  text,
  iconName,
  iconType,
  color,
  lang,
}) {
  const renderDataItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => makeAction(item, index)}>
        <View>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>
            {lang ? item.name[lang] : item.name}
          </Text>
        </View>
        <ActionButton
          onPress={() => makeAction(item, index)}
          text={text}
          color={color}
          iconType={iconType}
          iconName={iconName}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <SectionList
        sections={[{data: data}]}
        renderItem={renderDataItem}
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
