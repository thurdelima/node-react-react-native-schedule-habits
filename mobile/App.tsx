

import './src/lib/dayjs'; 
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Routes} from './src/routes'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }


  return (
    // <View style={styles.container}>
    <>
      {/* <Text style={styles.text} >Open up App.tx to start working on your app!</Text> */}
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    {/* </View> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#09090A',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontFamily: 'Inter_800ExtraBold'
//   }
// });
