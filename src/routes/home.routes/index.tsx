import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../pages/Home';


const HomeStack = createStackNavigator();


const HomeRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
        initialRouteName="SignIn">
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default HomeRoutes;
