 import {
   LineChart,
   BarChart,
   PieChart,
   ProgressChart,
   ContributionGraph,
   StackedBarChart,
 } from 'react-native-chart-kit';import { View, Text, Dimensions } from 'react-native'
 import React from 'react'
 
 export default function LiChart() {
   return (
     <View>
       <LineChart
         data={{
           labels: ['0', '60Km/hr', '120Km/hr', '180Km/hr', '240Km/hr', '280Km/hr'],
           datasets: [
             {
               data: [
                 Math.random() * 100,
                 Math.random() * 100,
                 Math.random() * 100,
                 Math.random() * 100,
                 Math.random() * 100,
                 Math.random() * 100,
               ],
             },
           ],
         }}
         width={Dimensions.get('window').width} // from react-native
         height={220}
         yAxisLabel="$"
         yAxisSuffix="k"
         yAxisInterval={1} // optional, defaults to 1
         chartConfig={{
           backgroundColor: '#000000',
          //  backgroundGradientFrom: '#fb8c00',
          //  backgroundGradientTo: '#ffa726',
           decimalPlaces: 2, // optional, defaults to 2dp
           color: (opacity = 1) => `rgba(	0, 255, 239, ${opacity})`,
           labelColor: (opacity = 1) => `rgba( 0, 255, 239, ${opacity})`,
           style: {
             borderRadius: 16,
           },
           propsForDots: {
             r: '6',
             strokeWidth: '2',
             stroke: '#00FFEF',
           },
         }}
         bezier
         style={{
           marginVertical: 8,
           borderRadius: 16,
         }}
       />
     </View>
   );
 }