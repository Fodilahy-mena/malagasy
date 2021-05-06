import React, {useMemo} from 'react';
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
const RenderDataItem = ({
  item,
  index,
  makeAction,
  text,
  iconName,
  iconType,
  color,
  lang,
  selectedId,
  disableAllOptions,
}) => {
  return useMemo(() => {
    return (
      <TouchableOpacity
        disabled={disableAllOptions && disableAllOptions}
        style={styles.item}
        onPress={() => makeAction(item, index)}>
        <View>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>
            {lang ? item.name[lang] : item.name}
          </Text>
        </View>
        <ActionButton
          onPress={() => makeAction(item, index)}
          text={
            item.isSelected === false && item.id !== selectedId
              ? 'Wrong'
              : !item.isSelected && item.id === selectedId
              ? 'Correct'
              : disableAllOptions === false
              ? text
              : text
          }
          color={
            item.isSelected === false && item.id !== selectedId
              ? '#D4068E'
              : !item.isSelected && item.id === selectedId
              ? '#06D440'
              : color
          }
          iconType={
            item.isSelected === false && item.id !== selectedId
              ? ''
              : !item.isSelected && item.id === selectedId
              ? 'octicon'
              : disableAllOptions === false
              ? iconType
              : iconType
          }
          iconName={
            item.isSelected === false && item.id !== selectedId
              ? 'close'
              : !item.isSelected && item.id === selectedId
              ? 'check'
              : disableAllOptions === false
              ? iconName
              : iconName
          }
        />
      </TouchableOpacity>
    );
  }, [selectedId]);
};
export default function ListItem({
  makeAction,
  data,
  text,
  iconName,
  iconType,
  color,
  lang,
  selectedId,
  disableAllOptions,
}) {
  return (
    <SafeAreaView>
      <SectionList
        sections={[{data: data}]}
        renderItem={({item, index}) => (
          <RenderDataItem
            item={item}
            index={index}
            makeAction={makeAction}
            text={text}
            iconName={iconName}
            iconType={iconType}
            color={color}
            lang={lang}
            selectedId={selectedId}
            disableAllOptions={disableAllOptions}
          />
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
    maxWidth: 320,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
