import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'

const Usersettings = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScale(20) }}>
      <View style={{ flexDirection: 'row', gap: 25 }}>
        <Image
          source={props.img}
          style={{ height: moderateScale(22), width: moderateScale(22), tintColor: '#fff', marginTop: moderateVerticalScale(10) }}
        />
        <View>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>{props.name}</Text>
          <Text style={{ color: 'grey', fontSize: 15 }}>{props.op1}</Text>
          <Text style={{ color: 'grey', fontSize: 15 }}>{props.op2}</Text>
        </View>
      </View>
      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/130/130884.png' }}
          style={{ height: moderateScale(22), width: moderateScale(22), tintColor: '#fff', marginTop: moderateVerticalScale(25) }}
        />
      </View>
    </View>
  )
}

export default Usersettings