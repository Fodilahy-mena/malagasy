import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';
import List from '../components/List/List';
import list from '../components/ListItem/list';

export default ({navigation}) => {
  //   if (loading) {
  //     return (
  //       <SafeAreaView>
  //         <ActivityIndicator size="large" />
  //       </SafeAreaView>
  //     );
  //   }

  return (
    <View>
      <List
        data={list}
        text={'Learn'}
        color="#06B6D4"
        iconType="material-community"
        iconName="arrow-right"
        navigation={navigation}
      />
    </View>
  );
};
