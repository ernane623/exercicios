import React from "react";
import { View, Text } from "react-native";
import Estilo from "./Estilo";

export default props => {

    return (
        <View>
            <Text style={Estilo.textG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </View>
    )
}