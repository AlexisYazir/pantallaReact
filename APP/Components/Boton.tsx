import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView, StyleProp, ViewStyle, Pressable } from "react-native";

type props={
    Titulo:string,
    Presionar:()=>void, //recibe una funcion vacia por ahora
    Variante?:'Primario'|'Secundario'|'Peligro', //el ? es para una propiedad opcional
    Estilo?:StyleProp<ViewStyle>, //para poder darle estilos desde otra parte
    Desabilitado?:boolean, //si no se la pongo estara en falso por defecto
    Icono?:React.ReactNode,
    PosicionIcono?:'Izquierda'|'Derecha',
}

//le pasaremos todas las propiedades que definimos arriba
const Boton = (Props:props) => {
    //para darle colores
    const GetVariante=()=>{
        switch(Props.Variante){
            case 'Secundario':return styles.Secundario;
            case 'Peligro':return styles.Peligro;
            default: return styles.Primario;
        }
    }
    return (
        <Pressable style={[styles.boton,GetVariante(),Props.Estilo, Props.Desabilitado && styles.Desabilitado]}
        onPress={Props.Presionar}>
            {Props.Icono && Props.PosicionIcono !== 'Derecha' && Props.Icono}            
            <Text style={styles.Texto}>{Props.Titulo}</Text>
            {Props.Icono && Props.PosicionIcono=== 'Derecha' && Props.Icono}
        </Pressable>
    )
}

export default Boton

const styles = StyleSheet.create({
    boton:{
        backgroundColor: 'blue',
        padding: 10,
        margin:0,
        borderRadius:10,
        color: '#778f9c',
    }, Texto:{
        color:'white',
        fontWeight:800,
        alignSelf:'center'
    },
    Primario:{backgroundColor:'blue'},
    Secundario:{backgroundColor:'orange'},
    Peligro:{backgroundColor:'red'},
    Desabilitado:{opacity:.6}
})