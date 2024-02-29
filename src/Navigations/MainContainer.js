import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"

// Screens
import HomeScreen from '../Screens/HomeScreen';
import Feeds from '../Screens/Feeds';
import AccountScreen from '../Screens/AccountScreen';
import LeadScreen from '../Screens/LeadScreen';
import Colors from '../Components/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

// Screen names
const homeName = 'Home';
const feedsName = 'Feeds';
const accountName = 'Account';
const leadName = 'LeadBoard';
const Tab = createMaterialBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: '#000000'}}
        activeColor="#FFFFFF"
        inactiveColor="#FFFFFF"
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === homeName) {
              iconName = 'home';
              return <Icon name={iconName} size={24} color={'#00FFEF'} />;
            } else if (route.name === accountName) {
              iconName = 'user';
              return <Icon name={iconName} size={24} color={'#00FFEF'} />;
            } else if (route.name === leadName) {
              iconName = 'database';
              return <Icon name={iconName} size={24} color={'#00FFEF'} />;
            } else if (route.name === feedsName) {
              iconName = 'tablet';
              return <Icon name={iconName} size={24} color={'#00FFEF'} />;
            }

            return null;
          },
        })}
        tabBarOptions={{
          // activeTintColor: '#FFFFFF',
          inactiveTintColor: 'black',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          indicatorStyle: {
            backgroundColor: '#FFFFFF', // Set the desired color for the indicator
          },
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={leadName} component={LeadScreen} />
        <Tab.Screen name={feedsName} component={Feeds} />
        <Tab.Screen name={accountName} component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  texty: {
    backgroundColor: '#1E1E1E', // Set the desired background color for the TabView area
  },
  indicator: {
    backgroundColor: 'white', // Set the desired indicator color here
  },
});
