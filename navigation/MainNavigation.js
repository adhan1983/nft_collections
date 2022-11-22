import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Collection from '../containers/Collection';
import Example from '../containers/Example';
import Favourites from  '../containers/Favourites';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNavigation = () =>{

return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              tabBarIcon: ({size, color}) => (
                <Icon name="bars" size={size} color={color} />
              ),
            }}
            name="Collections"
            component={Collection}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({size, color}) => (
                <Icon name="heart" size={size} color={color} />
              ),
            }}
            name="Favourites"
            component={Favourites}
          />
            <Tab.Screen
            options={{
              tabBarIcon: ({size, color}) => (
                <Icon name="book" size={size} color={color} />
              ),
            }}
            name="Examples"
            component={Example}
          />
        </Tab.Navigator>
      </NavigationContainer>

);
    
}

export default MainNavigation;