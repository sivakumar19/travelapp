import React from 'react';

import AddCity from './AddCity/AddCity';
import Cities from './Cities/Cities';
import City from './Cities/City';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const CitiesNav = createStackNavigator({
    City: { screen : City },
    Cities: { screen : Cities },    
});

const Tabs  = createBottomTabNavigator({
    AddCity : { screen : AddCity },
    Cities : { screen : CitiesNav }
});

const AppNavigator = createAppContainer(Tabs);

export default AppNavigator
