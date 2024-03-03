import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'
export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.fontG}>
            O valor {props.max} é maiorr que o valor {props.min}!
        </Text>
    )
}
