import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { moderateScale } from 'react-native-size-matters'

const Splash = ({navigation}) => {
  useEffect(() =>{
    setTimeout(()=>{
        navigation.navigate('Tab');
    },2000);
},[]);
  return (
    <View style={{backgroundColor:'#242527',flex:1,justifyContent:'center'}}>
      <View style={{alignItems:'center'}}>
        <Image
        source={require('../assets/Images/SplashScreen.png')}
        style={{width:moderateScale(600),height:moderateScale(500)}}
        />


      </View>
      <View >
        <ActivityIndicator size={50} color={'#f2ea00'} ></ActivityIndicator>
        </View>
    </View>
  )
}

export default Splash