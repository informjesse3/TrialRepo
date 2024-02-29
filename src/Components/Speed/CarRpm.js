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

export default function CarRpm() {
  return (
    <Speedometer value={54} max={80} angle={160} fontFamily="squada-one">
      <Background angle={180} />
      <Arc />
      <Needle />
      <Progress />
      <Marks />
      <Indicator/>
        {/* {(value, textProps) => (
          <Text
            {...textProps}
            fontSize={60}
            fill="#555"
            x={250 / 2}
            y={210}
            textAnchor="middle"
            fontFamily="squada-one">
            {value}k/m
          </Text>
        )} */}
 
    </Speedometer>
  );
}
