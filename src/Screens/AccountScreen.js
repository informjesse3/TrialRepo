// import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import { Center, Heading, Image, Text} from 'native-base';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Tabs from '../Components/Profile/Tabs';
import Colors from '../Components/Color';

import { StyleSheet } from 'react-native';
import profile3 from "../../assets/Image/profile3.png"

export default function AccountScreen({navigation}) {
  return (
    <>
      <Center bg={Colors.black} pt={10} pb={10}>
        {/* <SimpleLineIcons name="speedometer" color={Colors.electric} size={94} /> */}
        <Image source={profile3} w={24} h={24} resizeMode='contain' borderRadius={50} alt="Profile_image"/>
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.electric}>
          Admin
        </Heading>

        <Text italic fontSize={10} style={styles.texty}>
          John Doe jun 22 2023
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
}
const styles = StyleSheet.create({
  texty: {
    backgroundColor: '#1E1E1E', // Set the desired background color for the TabView area
    color:"white",
  },
  indicator: {
    backgroundColor: 'white', // Set the desired indicator color here
  },
});

