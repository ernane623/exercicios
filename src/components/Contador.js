import React, { useState } from "react";
 import { Text, Button } from "react-native";
 import Estilo from "./Estilo";

 export default props => {
     let numero  = props.inicial

     const inc = () => {
        numero++
        console.warn(numero)
     }
     const dec = () => numero--
    return  (
        <>
        <Text style={Estilo.textG}>{numero}</Text>
        <Button title="+" onPress={inc} />
        <Button title="-" onPress={dec} />
        </>
    )
 }