import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Submovie = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
    <View style={{marginTop:moderateScale(24),alignItems:'center'}}>
      <Image 
      source={{uri:props.path}}
      style={{height:moderateScale(220),width:props.cardWidth,borderRadius:13}}
      />
      <Text style={{color:'#fff',fontSize:16,marginTop:moderateScale(10)}}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Submovie