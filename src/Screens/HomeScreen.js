import React from 'react';
import {Box, Button, HStack, ScrollView,  Spacer,  Text, View, VStack,} from 'native-base';
import Colors from '../Components/Color';
// import Buttone from '../Components/Buttone';
// import Chart from '../Components/Chart';
import Readings from '../Components/Readings';
import {StyleSheet} from 'react-native';
import DashSpeed from '../Components/Speed/DashSpeeed';
import Topbar from '../Components/Topbar';
import CarRpm from '../Components/Speed2/CarRpm';
import CircularProgress11 from '../Components/Speed/CircularProgress11';
import CircularProgress12 from '../Components/Speed/CircularProgress12';
import SpeedUnits from '../Components/Speed/SpeedUnits';



export default function HomeScreen({navigation},{value}) {
  return (
    <Box flex={1} safeArea bg="black">
      <ScrollView flex={1} px={5}>
        <HStack space={2} alignItems="center" my={5}>
          <Text color={Colors.electric}>Timer: 00:20:70</Text>
          <Spacer />
          <View position="relative" pb={2}>
            <Topbar />
          </View>
        </HStack>
        <Box
          position={'absolute'}
          alignItems={'center'}
          justifyContent="center"
          mt={210}
          ml={10}>
          {' '}
        </Box>
        <VStack
          alignItems={'center'}
          justifyContent={'center'}
          position="relative"
          flex={1}
          m={0}
          p={0}>
          <Box position={'absolute'} pb={8}>
            <SpeedUnits />
          </Box>
          <DashSpeed value={2} />
          <Box mt={-170} py={0}>
            <CircularProgress11 radius={70} percentage={180} />
          </Box>
          <View mt={-2}>
            <HStack>
              <Box h={4} bg={Colors.lightWhite} w={10} />
              <Spacer />
              <Box h={4} bg={Colors.lightWhite} w={10} />
            </HStack>
            <Box
              w="500px"
              borderColor={'gray.700'}
              borderWidth=".4"
              h={0}
              m={0}
              p={0}
              zIndex={1}
            />
          </View>
        </VStack>
        <Box
          justifyContent="center"
          alignItems="center"
          mt={4}
          shadow={Colors.shadowColor}>
          <Button
            bg="transparent"
            style={styles.texty}
            _text={{color: 'white', fontWeight: 'bold', fontSize: '2xl'}}
            w="100%"
            fontSize={29}>
            CONNECT
          </Button>
        </Box>
        <VStack w="full">
          <Text color={Colors.electric}>Average Speed :</Text>
          <Text color={Colors.lightWhite} fontSize="10px">
            100km/hr
          </Text>
          <Readings />
        </VStack>
      </ScrollView>
    </Box>
  );
}
const styles = StyleSheet.create({
  texty: {
    color: '#1E1E1E', // Set the desired background color for the TabView area
  },
  blurBox: {
    width: 10,
    height: 4,
  },
});
