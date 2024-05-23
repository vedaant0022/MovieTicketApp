import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { searchMovies } from '../../API/Apicall'

const Seatbooking = ({navigation, route}: any) => {
  const Stack = createNativeStackNavigator();
  const [searchList, setSearchList] = useState([]);


  return (
    <View style={{backgroundColor:'#242527',height:'100%'}}>
      <ScrollView>
        <View style={{marginLeft:moderateScale(12),marginRight:moderateScale(12),marginTop:moderateVerticalScale(15)}} >
          {/* Header */}
            <View style={{flexDirection:'row',gap:15,marginTop:moderateScale(15)}}>
                  <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/3114/3114883.png'}}
                  style={{height:moderateScale(25),width:moderateScale(25),tintColor:'#fff'}}
                  />
                  </TouchableOpacity>
                  <Text style={{color:'#fff',fontSize:21,fontWeight:'400'}}>Seat Booking</Text>
            </View>










            
        </View>
      </ScrollView>
    </View>
  )
}

export default Seatbooking