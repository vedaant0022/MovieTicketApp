import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Ticket = ({ navigations, route }: any) => {
  const navigation = useNavigation();
  const [ticketData, setTicketData] = useState<any>(route.params);

  useEffect(() => {
    (async () => {
      try {
        const ticket = await AsyncStorage.getItem('ticket');
        if (ticket !== undefined && ticket !== null) {
          setTicketData(JSON.parse(ticket));
          console.log(ticketData)
        }
      } catch (error) {
        console.error('Something went wrong while getting Data', error);
      }
    })();
  }, []);

  if (ticketData !== route.params && route.params != undefined) {
    setTicketData(route.params);
  }

  if (ticketData == undefined || ticketData == null) {
    return (
      
        <View style={{ backgroundColor: '#242527', height: '100%' }}>
          <View style={{ marginLeft: moderateScale(18), marginRight: moderateScale(18), marginTop: moderateVerticalScale(24) }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', gap: 15, marginTop: moderateScale(15) }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' }}
                style={{ height: moderateScale(25), width: moderateScale(25), tintColor: '#fff' }}
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 21, fontWeight: '400' }}>Your Ticekts</Text>
          </View>
          {/* Error */}
          <View style={{ marginTop:moderateVerticalScale(350) }}>
            <Text style={{ color: '#AEAEAE', fontSize: 21,justifyContent:'center',textAlign:'center' }}>
              Sorry!....You Have No Tickets Booked!
            </Text>
          </View>
        </View>
        </View>
 
    );
  }
  return (
    <View style={{ backgroundColor: '#242527', flex: 1 }}>
      <View style={{ marginLeft: moderateScale(18), marginRight: moderateScale(18), marginTop: moderateVerticalScale(24) }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', gap: 15, marginTop: moderateScale(15) }}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' }}
              style={{ height: moderateScale(25), width: moderateScale(25), tintColor: '#fff' }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 21, fontWeight: '400' }}>Your Ticekts</Text>
        </View>

      </View>
    </View>
  )
}

export default Ticket

