import {NativeBaseProvider} from 'native-base';
import * as Svg from 'react-native-svg';
// import HomeScreen from './src/Screens/HomeScreen'
import MainContainer from './src/Navigations/MainContainer';


export default function App() {
  
  return (
    <NativeBaseProvider>
      <MainContainer />
    </NativeBaseProvider>
  );
}
