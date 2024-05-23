import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Fontfamily from '../assets/Styles/Fontfamily'

const Movie = (props: any) => {
  return (
    <View style={{alignItems:'center'}}>
    <TouchableOpacity onPress={() => props.cardFunction()}>
    <View style={{marginTop:moderateScale(24),alignItems:'center',marginBottom:moderateScale(12),}}>
      <Image 
      source={{uri:props.path}}
      style={{height:moderateScale(500),borderRadius:20,width:moderateScale(300),}}
      />
    </View>
    {/* Rating */}
    <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',gap:12}}>
        <View>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/2107/2107957.png'}}
            style={{height:moderateScale(20),width:moderateScale(20),borderRadius:20}}
            />
        </View>
        <View style={{alignItems:'center',alignContent:'center',}}>
        <Text style={{fontSize:14,color:'#fff',paddingTop:moderateScale(2.5)}}>
              {props.vote_average} ({props.vote_count})
        </Text>
        </View>
    </View>
    <View style={{alignItems:'center'}}>
      <Text numberOfLines={1} style={{color:'#fff',fontSize:24,marginTop:moderateScale(10),fontFamily:Fontfamily.Popins,fontWeight:"400"}}>{props.title}</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default Movie