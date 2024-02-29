import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Color'
import { Box, Heading, HStack, ScrollView, VStack } from 'native-base';

export default function Garage() {
  return (
    <Box flex={1} safeArea bg="black">
      <ScrollView flex={1} px={5}>
        <HStack mt={10}>
          <Heading color={Colors.electric}>Garage Goes Here</Heading>
        </HStack>
        <VStack>
          <Box>
            {' '}
            <Text>Made in Saudi</Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}
const styles = StyleSheet.create({
  texty: {
    color: '#000000', // Set the desired background color for the TabView area
  },
});