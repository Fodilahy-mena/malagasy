import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/Home';
const Stack = createStackNavigator();

export const LearnScreen = () => (
  <View>
    <Text>Learn</Text>
  </View>
);
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
        <Stack.Screen name="Learn" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
