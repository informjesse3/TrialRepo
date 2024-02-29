import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import React from 'react';
import {Box, Button, HStack, Text} from 'native-base';
import Colors from './Color';
import { StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

function Readings() {
  return (
    <Box bg={'black'} p={4} rounded={10} mb={8}>
      <HStack alignItems="center" py={2}>
        <SimpleLineIcons name="speedometer" color={Colors.electric} size={24} />
        <Text ml={2} color={Colors.yellow}>
          0 - 100 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <HStack alignItems="center" py={2} border-color="red">
        <SimpleLineIcons name="speedometer" color={Colors.electric} size={24} />
        <Text ml={2} color={Colors.white}>
          100 - 200 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <HStack alignItems="center" py={2}>
        <SimpleLineIcons name="speedometer" color={Colors.electric} size={24} />
        <Text ml={2} color={Colors.yellow}>
          100 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <HStack alignItems="center" py={2}>
        <SimpleLineIcons name="speedometer" color={Colors.electric} size={24} />
        <Text ml={2} color={Colors.yellow}>
          100 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <Box justifyContent="center" alignItems="center" mt={8}>
        <Button bg="rgba(255, 255, 255, 0.3)" w="30%">
          <Ionicons name="arrow-redo-sharp" size={24} style={styles.texty} />
        </Button>
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({
  texty: {
    color: '#000000', // Set the desired background color for the TabView area
  },
});
export default Readings;
