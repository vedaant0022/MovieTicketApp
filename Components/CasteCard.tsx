import { View, Text, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const CasteCard = (props: any) => {
  return (
    <View>
      <View style={{marginTop:moderateScale(12),marginBottom:moderateScale(5)}}>
        <Image
         source={{uri: props.imagePath}}
        style={{height:moderateScale(90),width:moderateScale(75),borderRadius:50}}
        />
      </View>
      <View style={{alignItems:'center',marginTop:moderateScale(5)}}>
        <Text style={{color:'#fff'}}>{props.title}</Text>
        <Text style={{color:'#fff'}}>{props.subtitle}</Text>
      </View>
    </View>
  )
}

export default CasteCard