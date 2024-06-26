import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Searchbar = (props: any) => {
  const Stack = createNativeStackNavigator();
  const [search, setsearch] = useState('');
  return (
    
      <View style={{ borderWidth: 0.8, borderColor: 'grey', width: moderateScale(360), alignSelf: 'center', borderRadius: 15, marginTop: moderateScale(10), flexDirection:'row'}}>
        <TextInput
          placeholder='Search For Movies'
          value={search}
          onChangeText={textInput => setsearch(textInput)}
          style={{fontSize:18,marginLeft:moderateScale(10),color:'#fff'}}
          placeholderTextColor={'#fff'}
        />
        <TouchableOpacity 
        style={{marginLeft:moderateScale(155),marginTop:moderateScale(10)}}
        onPress={()=> props.searchFunction(search)}>
        <Image
        source={{uri:'https://cdn-icons-png.flaticon.com/512/622/622669.png'}}
        style={{height:moderateScale(25),width:moderateScale(25),tintColor:'grey'}}
        />
        
        </TouchableOpacity>
      </View>
    
  )
}

export default Searchbar