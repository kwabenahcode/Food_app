import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

const Button = ({title, buttonContainer, buttonText, press, icon}) => {
  return (
    <TouchableOpacity 
    style={buttonContainer}
    onPress={press}
    >
       <Text style={buttonText}>{title}{icon}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
})

export default Button