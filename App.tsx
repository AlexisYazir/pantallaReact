import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ejemplo from './APP/Components/Ejemplo';

//ScrollView

export default function App() {
  return (
    
    <View style={styles.container}>
      <ScrollView>
        <Ejemplo/>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162127',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "1"
  },
});
