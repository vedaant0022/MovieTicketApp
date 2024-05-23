import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../TabNavigator/Homescreen';
import User from '../TabNavigator/User';
import Search from '../TabNavigator/Search';

const Tab = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'yellow',
        tabBarInactiveTintColor:'grey',tabBarShowLabel:false,
        tabBarLabelPosition:'below-icon',
        tabBarHideOnKeyboard:true,
        
        tabBarStyle:{position:'absolute',
                    bottom:0.1,
                    borderRadius:4,
                    elevation:10,
                    height:'8%',
                    backgroundColor:'#242527',
                    borderBlockColor:'#242527'
                    
                }
    }}
    >
    <Tab.Screen name="Home" component={Homescreen}options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
              style={{height:25,width:25,tintColor: focused ? 'yellow':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? 'yellow':'grey'}}>Home</Text>
            </View>
          )
        }} />
    <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/149/149852.png'}}
              style={{height:25,width:25,tintColor: focused ? 'yellow':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? 'yellow':'grey'}}>Search</Text>
            </View>
          )
        }} />
    <Tab.Screen name="User" component={User} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'}}
              style={{height:25,width:25,tintColor: focused ? 'yellow':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? 'yellow':'grey'}}>User</Text>
            </View>
          )
        }} />
  </Tab.Navigator>
  )
}

export default Tab