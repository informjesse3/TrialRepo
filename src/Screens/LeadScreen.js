import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  FlatList,
  Flex,
  Heading,
  HStack,
  ScrollView,
  View,
} from 'native-base';
import Colors from '../Components/Color';
import LiChart from '../Components/line-chart/LiChart';

export default function LeadScreen({navigation}) {
  const Data = [
    {
      id: 1,
      name: 'Jesse',
    },
    {
      id: 2,
      name: 'Jesse',
    },
    {
      id: 3,
      name: 'Jesse',
    },
    {
      id: 4,
      name: 'Jesse',
    },
    {
      id: 5,
      name: 'Jesse',
    },
    {
      id: 6,
      name: 'Jesse',
    },
  ];

  const AppData = ({item}) => <Text>{item.name}</Text>;
  headerComponent = () => {
    return <Heading color={Colors.electric}>Checks Points</Heading>;
  };

  itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <Box flex={1} px={5} bg="black">
      <ScrollView>
        <HStack mt={10}>
          <Heading color={Colors.electric}>Leads Goes Here</Heading>
        </HStack>
        <FlatList
          mt={10}
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          ListEmptyComponent={<Text>Field Empty!</Text>}
          ItemSeparatorComponent={itemSeparator}
          data={Data}
          renderItem={AppData}
        />
      </ScrollView>
      <Box>
        <LiChart/>
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({
  listHeader: {
    height:55,
    alignItems:"center",
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
  },
});
