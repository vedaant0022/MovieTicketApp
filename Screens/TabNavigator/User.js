import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Usersettings from '../../Components/Usersettings'

const User = () => {
  return (
    <View style={{ backgroundColor: '#242527', flex: 1 }}>
      <View style={{ marginLeft: moderateScale(18), marginRight: moderateScale(18), marginTop: moderateScale(24) }}>
        {/* Profile */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: '#fff' ,fontWeight:'500'}}>My Profile</Text>
        </View>
        {/* Profile */}
        <View style={{ alignItems: 'center', marginTop: verticalScale(50) }}>
          <Image
            source={{ uri: 'https://w0.peakpx.com/wallpaper/158/677/HD-wallpaper-andrew-tate.jpg' }}
            style={{ height: moderateScale(125), width: moderateScale(125), borderRadius: 100, }}
          />
          <Text style={{ fontSize: 21, color: '#fff', fontWeight: '500', paddingTop: moderateScale(15) }}>Admin</Text>
        </View>
        {/* Options */}

        <View style={{ marginTop: moderateScale(30) }}>
          <TouchableOpacity>
            <Usersettings
             name= 'Account'
             op1='Edit Profile'
             op2='Change Password'
             img = {{uri:'https://cdn-icons-png.flaticon.com/512/747/747376.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Usersettings
            name= 'Settings'
            op1='Themes'
            op2='Permission'
            img = {{uri:'https://cdn-icons-png.flaticon.com/512/503/503822.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Usersettings
             name= 'Offers & Referrals'
             op1='Offers'
             op2='Referrals'
             img = {{uri:'https://cdn-icons-png.flaticon.com/512/2225/2225110.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Usersettings
             name= 'About'
             op1='About Movies'
             op2='More'
             img = {{uri:'https://cdn-icons-png.flaticon.com/512/3503/3503827.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Usersettings
             name= 'Logout'
             op1='Logout'
             img = {{uri:'https://cdn-icons-png.flaticon.com/512/1286/1286853.png'}}
            />
          </TouchableOpacity>

        </View>












      </View>
    </View>
  )
}

export default User