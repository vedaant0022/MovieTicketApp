import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Movie = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
    <View style={{marginTop:moderateScale(24),alignItems:'center',marginBottom:moderateScale(12)}}>
      <Image 
      source={{uri:props.path}}
      style={{height:moderateScale(500),borderRadius:13,width: props.cardWidth}}
      />
    </View>
    {/* Rating */}
    <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
        <View>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/2107/2107957.png'}}
            style={{height:moderateScale(20),width:moderateScale(20)}}
            />
        </View>
        <View style={{alignItems:'center',alignContent:'center',marginLeft:moderateScale(10)}}>
        <Text style={{fontSize:14,color:'#fff'}}>
              {props.vote_average} ({props.vote_count})
        </Text>
        </View>
    </View>
    <View style={{alignItems:'center'}}>
      <Text numberOfLines={1} style={{color:'#fff',fontSize:24,marginTop:moderateScale(10),fontWeight:700}}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Movie