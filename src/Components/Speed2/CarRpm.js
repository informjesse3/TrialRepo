import React from 'react';
import {View, Text} from 'react-native';
// import AnimatedSpeedometer from './Speed/AnimatedSpeedometer';
import Arc from './Arc';
import Indicator from './Indicator';
import Background from './Background';
import Needle from './Needle';
import Progress from './Progress';
import Speedometer from './Speedomter';
import DangerPath from './DangerPath';
import Marks from './Marks';

export default function CarRpm({Text}) {
  return (
    <Speedometer value={4} max={10} angle={160} fontFamily="squada-one">
      <Background angle={180} />
      <Arc />

      <Progress />
      <Marks />
      {/* <Indicator /> */}
    
 
    </Speedometer>
  );
}
