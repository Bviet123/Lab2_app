import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './Screens/Routes';
import ContactListItem from './Components/ContractListItem';
import Contacts from './Screens/Contacts';
import Favorites from './Screens/Favourites';
import Options from './Screens/Options';
import Profile from './Screens/Profile';
import User from './Screens/User';
const Stack = createNativeStackNavigator();
export default function App(){
    return(
      //<Contacts/>
      //<Favorites/>
      //<Options/>
      <User/>
    )
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});