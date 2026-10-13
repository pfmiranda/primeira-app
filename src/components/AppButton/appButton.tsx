import React from 'react'
import {Button, TouchableOpacity, Text} from 'react-native'

const AppButton = () => {
  return (
    //<Button title='Clique Aqui'/>
    <TouchableOpacity
        activeOpacity={0.4}
        style={{
            backgroundColor: "#618ae8",
            padding: 10,
            borderRadius: 1,
            marginTop: 10,
            alignItems: "center",
        }}
        onPress={() => {
            console.log("CliqueAqui foi pressionado")
        }}
        >

      <Text style ={{fontSize: 20, fontFamily: 'Arial', color: 'white'}}>
        Clique Aqui
      </Text>
    </TouchableOpacity>
  )
}

export default AppButton
