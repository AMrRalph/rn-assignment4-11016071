import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './screens/Login';
import Homepage from './screens/Homepage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login/> */}
      <Homepage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    
  },
});
