import React from 'react';
import {Image} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home';
import Search from '../../pages/Search';

import IconHome from '../../assets/icons/home.png';
import IconCart from '../../assets/icons/cart.png';
import IconSearch from '../../assets/icons/search.png';

const HomeTab = createBottomTabNavigator();


const HomeRoutes: React.FC = () => {
  return (
    <HomeTab.Navigator
      tabBarOptions={{
        labelStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 14,
          marginBottom: 20,
        },
        activeTintColor: '#fff',
        activeBackgroundColor: '#4391D1',
        inactiveBackgroundColor: '#4391D1',
        inactiveTintColor: '#000',
        tabStyle: {
          height: 85,
          justifyContent: 'center',
          alignItems: 'center'

        },
        style: {
          height: 85
        },
      }}
      initialRouteName="Home">
      <HomeTab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={IconHome} style={{width: 32, height: 32}}/>
          ),
        }}
      />
      <HomeTab.Screen name="Search" component={Search}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color, size }) => (
            <Image source={IconSearch} style={{width: 32, height: 32}}/>
          ),
        }}
      />
      <HomeTab.Screen name="Car" component={''}
        options={{
          tabBarLabel: 'Carinho',
          tabBarIcon: ({ color, size }) => (
            <Image source={IconCart} style={{width: 32, height: 32}}/>
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

export default HomeRoutes;
