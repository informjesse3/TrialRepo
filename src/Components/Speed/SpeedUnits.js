import { View, Text } from 'react-native'
import React from 'react'
import { Heading } from 'native-base'
import Colors from '../Color'

export default function SpeedUnits() {
  return (
    <View justifyContente="center" alignItems="center" mb={20}>
      <Heading color={Colors.lightWhite}>- MPH -</Heading>
      <Heading color={Colors.lightWhite} p={2} >P</Heading>
    </View>
  );
}