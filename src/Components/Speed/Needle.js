import {View, Animated, Easing} from 'react-native';
import {Svg, G, Circle, Path} from 'react-native-svg';
import React from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircularProgress11({
  percentage = 50,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = '#00FFEF',
  segments = 12, // Number of split segments
  rotationX = 0, // Rotation angle on the x-axis
  rotationZ = 10, // Rotation angle on the z-axis
}) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const halfcircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const segmentAngle = (2 * Math.PI) / segments; // Angle of each segment

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / 100;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, []);

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
          rotation="-90"
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
          {renderSegments()}
        </G>
      </Svg>
    </View>
  );
}
