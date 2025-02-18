import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import Header from './APP/Components/Header';
import Boton from './APP/Components/Boton';
import Fontisto from  '@expo/vector-icons/Fontisto'
import Caja from './APP/Components/Caja';
import AntDesign from '@expo/vector-icons/AntDesign';


//ScrollView

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      
        {/* <Header Titulo={'Calculadora'} Nombre={'Alexis Yazir'} Imagen={require('./assets/logo-instagram.png')}/> */}
        <Boton Titulo={'Boton 1'} Presionar={() => { Alert.alert('hola señor') }} icono={<Fontisto name="coffeescript" size={24} color="white"/>} />
        <Boton Titulo={'Boton 2'} Variante={'Peligro'} Desabilitado></Boton>
        <Caja label='User' icono={<AntDesign name="user" size={24} color="white" />} color='white'/>
        <StatusBar style="auto" />
      
    </View>
    </ScrollView>
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
