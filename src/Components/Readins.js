import {FontAwesome5} from '@expo/vector-icons';
import React from 'react';
import {Box, HStack, Text} from 'native-base';
import {Entypo} from '@expo/vector-icons';
import Colors from './Color';
import Buttone from './Buttone';
function Readings() {
  return (
    <Box bg={Colors.black} p={4} rounded={10} mb={8}>
      <HStack alignItems="center" py={2}>
        <Entypo name="gauge" size={24} color={Colors.electric} />
        <Text ml={2} color={Colors.yellow}>
          0 - 100 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <HStack alignItems="center" py={2}>
        <Entypo name="gauge" size={24} color={Colors.electric} />
        <Text ml={2} color={Colors.white}>
          100 - 200 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <HStack alignItems="center" py={2}>
        <Entypo name="gauge" size={24} color={Colors.electric} />
        <Text ml={2} color={Colors.yellow}>
          100 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <HStack alignItems="center" py={2}>
        <Entypo name="gauge" size={24} color={Colors.electric} />
        <Text ml={2} color={Colors.yellow}>
          100 Km/h
        </Text>
        <Box flex={1} />
        <Text color={Colors.electric}>- - S</Text>
      </HStack>
      <Box justifyContent="center" alignItems="center" mt={8}>
        <Buttone bg={Colors.electric} w="30%" _text={{color: 'white'}} rounded="lg">
          <FontAwesome5 name="clipboard-list" size={27} color="black" />
        </Buttone>
      </Box>
    </Box>
  );
}

export default Readings;
