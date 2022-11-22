import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../nft_collections/containers/HomeScreen';


const Tab = createBottomTabNavigator();

export default function App() {  
  
  return (    

    <NavigationContainer>
      <Text style={{textAlign:'center'}}>Teste</Text>
    </NavigationContainer>
    // <NavigationContainer>
    //     <Tab.Navigator>
    //       <Tab.Screen
    //         options={{
    //           tabBarIcon: ({size, color}) => (
    //             <Icon name="home" size={size} color={color} />
    //           ),
    //         }}
    //         name="Home"
    //         component={HomeScreen}
    //       />
    //       <Tab.Screen
    //         options={{
    //           tabBarIcon: ({size, color}) => (
    //             <Icon name="cogs" size={size} color={color} />
    //           ),
    //         }}
    //         name="Test"
    //         component={HomeScreen}
    //       />
    //     </Tab.Navigator>
    //   </NavigationContainer>
  );

}

