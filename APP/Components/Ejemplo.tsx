import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from "react-native";
import { ChevronDown } from "lucide-react-native"; // Importa el icono

export default function Ejemplo() {
  return (    
      <View style={styles.container}>
        <View style={styles.idiomaContainer}>
          <Text style={styles.textoIdioma}>Español</Text>
          <ChevronDown size={18} color="#778f9c" />
        </View>

        <Image source={require("../../assets/logo-instagram.png")} style={styles.logo} />

        <TextInput style={styles.cajas} placeholder="Nombre de usuario, correo o celular" placeholderTextColor="rgba(255,255,255,0.5)" />
        <TextInput style={styles.cajas} placeholder="Contraseña" placeholderTextColor="rgba(255,255,255,0.5)" secureTextEntry={true} />

        <TouchableOpacity style={styles.boton} onPress={() => Alert.alert("Hola")}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>

        <Text style={styles.texto1}>¿Olvidaste tu contraseña?</Text>

        <TouchableOpacity style={styles.boton2} onPress={() => Alert.alert("Hola señor")}>
          <Text style={styles.textoBoton2}>Crear cuenta nueva</Text>
        </TouchableOpacity>

        <Text style={styles.textoMeta}>Meta</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 170,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  idiomaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 100,
  },
  textoIdioma: {
    color: "#778f9c",
    fontSize: 14,
    marginRight: 5,
  },
  logo: {
    width: 64,
    height: 63,
    marginBottom: 100,
  },
  cajas: {
    fontSize: 15,
    width: 350,
    height: 61,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#3d5461",
    color: "#fff",
    marginVertical: 6,
  },
  boton: {
    marginTop: 6,
    width: 350,
    height: 45,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#0064e0",
    alignItems: "center",
    justifyContent: "center",
  },
  boton2: {
    marginTop: 170,
    width: 330,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#3a8bee",
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 15,
  },
  textoBoton2: {
    color: "#3a8bee",
  },
  texto1: {
    marginTop: 18,
    color: "#fff",
    fontSize: 16,
  },
  textoMeta: {
    marginTop: 10,
    color: "#778f9c",
    fontSize: 16,
    paddingBottom:10
  },
});

