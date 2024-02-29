import {Box, Text, View} from 'native-base';
import Colors from './Color';
import SpeedometerView from './SpeedometerView';

function Chart() {
  return (
    <View>
      <Box
        flex={1}
        bg={Colors.black}
        w="full"
        p={2}
        h={200}
        rounded={10}
        mb={8}
        justifyContent="center">
        <Text color={Colors.electric} ml={50}>
          Check The Speed
        </Text>
        <Box p={4} mr="170px">
          {' '}
          <SpeedometerView />
        </Box>
      </Box>
    </View>
  );
}

export default Chart;
