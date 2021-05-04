import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, ScrollView} from 'react-native';
import HomeScreen from '../containers/Home';
const Stack = createStackNavigator();
import Learning from '../containers/Learning';
import {VirtualizedView} from '../components/List/List';
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="false">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   headerLeft: props => <Header />,
          // }}
        />
        <Stack.Screen name="Learn" component={Learning} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
