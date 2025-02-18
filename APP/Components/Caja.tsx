import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

type props={
    label:string,
    icono:React.ReactNode,
    color?:string,
    onChange: (valor:string)=>void,
}

const Caja = (Props:props) => {
    return (
        <View style={[styles.container]}>
            <Text style={{color:Props.color}}>{Props.label}</Text>
            <View style={styles.caja}>
                {Props.icono}
                <TextInput style={{color:Props.color}} placeholder={Props.label} />
            </View>
        </View>
        
    )
}

export default Caja

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:2,
        borderColor:'black'
    },
    caja:{
        flexDirection:'row',
        borderColor: 'white' 
    },
    label:{
        fontSize:10
    }
})