
import { View, TextInput, Animated, TextInputBase } from 'react-native'
import React, {useState} from 'react'
import Svg, {G, Circle} from "react-native-svg"
import { StyleSheet } from 'react-native';



const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default function CircularProgress11({
  percentage = 1000,
  radius = 40,
  strokeWidth = 10,
  duration = 900,
  color = '#00FFEF',
  delay = 0,
  segments = 12,
  rotationX = 0, // Rotation angle on the x-axis
  rotationZ = 0, // Rotation angle on the z-axis// Number of split segments
  textColor,
  max = 1000,
}) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const halfcircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const segmentAngle = (2 * Math.PI) / segments; // Angle of each segment

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

 const rotateStyle = {
   transform: [
     {perspective: 1000},
     {rotateX: `${rotationX}deg`},
     {rotateZ: `${rotationZ}deg`},
   ],
 };

  const renderSegments = () => {
    const segmentsArray = [];
    for (let i = 0; i < segments; i++) {
      const segmentStartAngle = i * segmentAngle;
      const segmentEndAngle = (i + 1) * segmentAngle;

      const startX = radius + Math.cos(segmentStartAngle) * radius;
      const startY = radius + Math.sin(segmentStartAngle) * radius;

      const endX = radius + Math.cos(segmentEndAngle) * radius;
      const endY = radius + Math.sin(segmentEndAngle) * radius;

      const largeArcFlag =
        segmentEndAngle - segmentStartAngle <= Math.PI ? 0 : 1;

      const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY}`;

      segmentsArray.push(
        <Path
          key={i}
          d={pathData}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
        />,
      );
    }

    return segmentsArray;
  };

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfcircle * 2} ${halfcircle * 2}`}>
        <G
          rotation="90"
          origin={`${halfcircle}, ${halfcircle}`}
          style={rotateStyle}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={0.2}
            fill="transparent"
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="100"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: radius / 2,
            color: textColor ?? color,
            fontWeight: '900',
            textAlign: 'center',
          },
          {color: 'red'}, // Add this line to set the text color to white
        ]}
      />
    </View>
  );
}