import React from 'react';
import {View, Text} from 'react-native';
// import AnimatedSpeedometer from './Speed/AnimatedSpeedometer';
// import Arc from './Arc';
// import Indicator from "./Indicator";
// import Background from './Background';
// import Progress from './Progress';
// import Speedometer from './Speedomter';
// import DangerPath from './DangerPath';
// import Marks from './Marks';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
Indicator ,
  DangerPath,
} from 'react-native-cool-speedometer';
import Colors from '../Color';


export default function DashSpeed({value}) {
  return (
    <View>
      <Speedometer
        value={2}
        min={0}
        max={8}
        duration={1000}
        preFill={0}
        width={350}>
        <Background />
        <Arc />
        <Marks step={0.5} />
        <Progress />
        <Text color={Colors.electric}>85%</Text>
        <DangerPath arcWidth={4} />    
        <Indicator color="yellow" translateY={109} translateX={155} />
      </Speedometer>
    </View>
  );
}
