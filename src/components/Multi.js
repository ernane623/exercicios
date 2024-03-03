import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

function Comp() {
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Estilo.txtG}>Comp #O1</Text>
}

function Comp2() {
    return <Text style={Estilo.txtG}>Comp #O2</Text>
}

export {Comp1, Comp2}
export default Comp