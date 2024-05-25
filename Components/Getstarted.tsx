import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from './Slider';
import { NativeScreenNavigationContainer } from 'react-native-screens';


const Getstarted = ({navigation, route}: any) => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{backgroundColor:'#242527',height:'100%'}}>
      <ScrollView>
        <View style={{marginLeft:moderateScale(12),marginRight:moderateScale(12),marginTop:moderateVerticalScale(15)}} >
          {/* Carsoul */}
          <View style={{marginTop:moderateVerticalScale(20),}}>
            <Slider/>
            </View>
          {/* Button */}
          <View style={{alignItems:'center',marginTop:moderateVerticalScale(30)}}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("Signup")}}
            >
              <View style={{borderWidth:1.5,borderColor:'grey',height:moderateVerticalScale(40),width:moderateScale(330),borderRadius:15,}}>
                <Text style={{color:'#AEAEAE',fontSize:21,fontWeight:'400',textAlign:'center',paddingTop:moderateScale(5)}}>Get Started!</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Line */}
          <View style={{borderWidth:0.5,marginTop:moderateVerticalScale(25),borderColor:'#5D5D5D'}}></View>
          {/* Already have account */}
          <View style={{alignItems:'center',marginTop:moderateVerticalScale(20)}}>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("Login")}}
            >
              <View style={{borderWidth:1,backgroundColor:'yellow',borderColor:'yellow',height:moderateVerticalScale(40),width:moderateScale(330),borderRadius:15}}>
                <Text style={{color:'black',fontSize:21,fontWeight:'800',textAlign:'center',paddingTop:moderateScale(5)}}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>










            
        </View>
      </ScrollView>
    </View>
  )
}

export default Getstarted