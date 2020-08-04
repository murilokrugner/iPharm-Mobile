import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../pages/SignIn';

const Auth = createStackNavigator();


const AuthRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FAFBFD' },
        }}
        initialRouteName="SignIn">
        <Auth.Screen name="SignIn" component={SignIn} />
      </Auth.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;
