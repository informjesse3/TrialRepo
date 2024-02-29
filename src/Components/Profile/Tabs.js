import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import Order from './Order';
import Colors from '../Color';
import Garage from './Garage';
import {View} from 'native-base';



const renderScene = SceneMap({
  first: Profile,
  second: Order,
  third: Garage,
});
export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Notifications',
      nug: '25',

      icon: <Icon name="bell" size={24} color="black" />,
    },
    {
      key: 'second',
      title: 'History',
      icon: <Icon name="history" size={24} color="black" />,
    },
    {
      key: 'third',
      title: 'Garage',
      icon: <FontAwesome name="car" size={24} color="black" />,
    },
  ]);

  const renderTabs = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Colors.electric}}
      activeColor={Colors.lightWhite}
      inactiveColor={Colors.lightWhite}
      style={styles.tabBar}
      renderLabel={({route}) => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {route.key === 'first' && (
            <Text style={styles.tabLabelText}>{route.nug}</Text>
          )}
          {route.icon}

          <Text style={{marginLeft: 8, color:"black"}} color='black'>{route.title}</Text>
        </View>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabs}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Set the desired background color for the TabView area
  },
  tabBar: {
    backgroundColor: 'white', // Set the desired background color for the TabBar
  },
  indicator: {
    backgroundColor: 'white', // Set the desired indicator color here
  },
  tabLabel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Set the desired background color around the icons and title
  },
  tabLabelActive: {
    backgroundColor: 'red', // Set the desired background color for the active tab
  },
  tabLabelText: {
    alignItems:"center",
    justifyContent:"center",
    color: '#000000',
    marginLeft: 0,
    marginBottom: 0,
    backgroundColor: 'red',
    padding: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderEndColor: 'yellow',
fontSize:9,
fontWeight:"bold"
  },
});
