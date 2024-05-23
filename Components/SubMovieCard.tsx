import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const SubMovieCard = (props: any) => {
  return (
    <View>
      <View style={{marginLeft:moderateScale(12),marginRight:moderateScale(12),marginTop:moderateVerticalScale(25)}}>
      <TouchableOpacity onPress={() => props.cardFunction()}>
      <View style={{alignItems:'center'}}>
        <Image
        style={{height:moderateScale(260),width:moderateScale(150)}}
          source={{uri: props.imagePath}}
        />
        <Text 
        
        style={{textAlign:'center',color:'#fff',fontWeight:'500',fontSize:18,lineHeight:moderateScale(60)}}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubMovieCard