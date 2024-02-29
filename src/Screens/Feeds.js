import {Text, Pressable, View} from 'react-native';
import React from 'react';
import {Box, Flex, Heading,  HStack,  ScrollView, VStack} from 'native-base';
import Colors from '../Components/Color';
import DashSpeed from '../Components/Speed/DashSpeeed';
import CarRpm from '../Components/Speed2/CarRpm';
import CircularProgress11 from '../Components/Speed/CircularProgress11';


export default function Feeds({navigation}) {

  return (
    <Box flex={1} safeArea bg="black">
      <ScrollView flex={1} px={5}>
        <HStack mt={10}>
          <Heading color={Colors.electric}>Feeds Goes Here</Heading>
        </HStack>
        <VStack>
          <Box>
            {' '}
            <Text>Made in Saudi</Text>
          </Box>
        </VStack>
        <HStack
          style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          {/* <Chart /> */}
          <DashSpeed />

          <CircularProgress11 />
        </HStack>
      </ScrollView>
    </Box>
  );
}
