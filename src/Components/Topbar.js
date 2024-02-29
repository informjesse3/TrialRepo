
import {Box, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './Color';
import FontAwesome from "react-native-vector-icons/FontAwesome"

function Topbar() {
  return (
    <Box
      flex={1}
      w={20}
      bg={'black'}
      rounded={5}
      py={4}
      px={1}
      alignContent="center">
      <VStack space={1} my={2} alignContent="center" alignItems="center">
        <Icon name="rocket" color={Colors.electric} size={24} />
        <Text color={Colors.electric} pb={1}>
          ...
        </Text>
       
        <Icon name="bluetooth" color={Colors.electric} size={24} />
        <Text color={Colors.electric} pb={1}>
          ...
        </Text>
        <FontAwesome name="battery-3" color={Colors.electric} size={12} />
        <Text fontSize={13} pt={1} pb={1} color={Colors.electric}>
          70%
        </Text>
      </VStack>
    </Box>
  );
}

export default Topbar;
