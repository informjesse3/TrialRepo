import React from 'react';
import {View, Text} from 'react-native';
// import AnimatedSpeedometer from './Speed/AnimatedSpeedometer';
import Arc from './Arc';
import Indicator from "./Indicator";
import Background from './Background';
import Needle from './Needle';
import Progress from './Progress';
import Speedometer from './Speedomter';
import DangerPath from './DangerPath';
import Marks from './Marks';


export default function DashSpeed() {
  return (
    <Speedometer value={30} min={0} max={300} duration={1000} preFill={0}>
      <Background />
      <Indicator />
      <Arc />
      <Needle />
      <Progress />
      <Marks />
      <Progress />
      <DangerPath />
    </Speedometer>
  );
}
