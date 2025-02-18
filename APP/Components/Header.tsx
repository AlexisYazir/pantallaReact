import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from "react-native";

type Props={
    Titulo:String,
    Nombre:String,
    Imagen:any,
    Color: String
}

const Header = (props:Props) => {
    return (    
        <View style={styles.container}>
            <View>
                <Image source={props.Imagen}></Image>
            </View>
            <View>
                <Text>{props.Titulo}</Text> 
                <Text>{props.Nombre}</Text> 
            </View>
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

    Text:{
        color:"rgb(137, 168, 186)"
    }
})


export default Header