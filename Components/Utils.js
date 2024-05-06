import { View, Text } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Utils = () => {
    const Component = props =>
        <View style={{
            width: scale(30),
            height: verticalScale(50),
            padding: moderateScale(5)
        }}/>;

  return (
    <View>
      <Text>Utils</Text>
    </View>
  )
}

export default Utils