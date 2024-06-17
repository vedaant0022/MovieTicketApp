import { View, Text, ScrollView, ActivityIndicator, StatusBar, FlatList, Dimensions, Image } from 'react-native'
import React, { lazy, useEffect, useState } from 'react'

import Searchbar from '../../Components/Searchbar'
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { UpCominglistapi, nowPlayingapi, popularlistapi, baseImagePath } from '../../API/Apicall';
import Submovie from '../../Components/Submovie';
import Movie from '../../Components/Movie';
import Fontfamily from '../../assets/Styles/Fontfamily';

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('window');
const Homescreen = ({navigation}:any) => {
  
  const [nowplaying, setnowplaying] = useState(undefined);
  const [upcoming, setupcoming] = useState(undefined);
  const [popular, setpopular] = useState(undefined);

  // List Movies
  const nowplayinglist = async ()=>{
    console.log(nowPlayingapi)
  try{
    let response = await fetch(nowPlayingapi);
    let json = await response.json();
    return json;
  } catch(error) {
    console.error(
      'Something went wrong in nowplayinglist',error
    )
  }
}
  const upcominglist = async ()=>{
    // console.log(UpCominglistapi)
  try{
    let response = await fetch(UpCominglistapi);
    let json = await response.json();
    return json;
  } catch(error) {
    console.error(
      'Something went wrong in upcoming',error
    )
  }
}
  const popularlist = async ()=>{
    // console.log(popularlistapi)
  try{
    let response = await fetch(popularlistapi);
    let json = await response.json();
    return json;
  } catch(error) {
    console.error(
      'Something went wrong in popularlist',error
    )
  }
}
// Useffect
  useEffect(()=>{
    (async () => {
      let tempNowplaying = await nowplayinglist();
      setnowplaying (tempNowplaying.results);

      let tempupcoming = await upcominglist();
      setupcoming (tempupcoming.results);

      let temppopular = await popularlist();
      setpopular (temppopular.results);

    })();
  }, []);

const searchMovieFunction = () => {
  navigation.navigate('Search')
}
  // Activity Loader
  if (
    nowplaying === undefined && nowplaying === null &&
    upcoming === undefined && upcoming === null &&
    popular === undefined && popular === null 
  ) {
    return(
      <ScrollView 
      bounces={false}>
        <StatusBar hidden/>
        <View style={{marginTop:moderateScale(20)}}>
          <ActivityIndicator size={'large'} color={'yellow'}/>
        </View>
      </ScrollView>
    )
  }


  // Body
  return (
    <View style={{backgroundColor:'#242527',height:'100%'}}>
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      style={{marginBottom:moderateScale(100)}}>
        <StatusBar hidden/>
      {/* Title */}
      <View style={{marginLeft:moderateScale(12),marginRight:moderateScale(12),marginTop:verticalScale(15)}}>
        {/* <Searchbar searchFunction={searchMovieFunction}/> */}
        <View style={{flexDirection:'row',gap:10,justifyContent:'center'}}>
          <Image
          source={{uri:'https://cdn-icons-png.flaticon.com/512/711/711917.png'}}
          style={{height:moderateScale(25),width:moderateScale(25),tintColor:'yellow',marginTop:moderateScale(5)}}
          />
          <Text style={{color:'#fff',fontSize:28,fontStyle:'italic'}}>Ticketopia</Text>
        </View>
      </View>
      {/* Now playing */}
      <View style={{marginLeft:moderateScale(18),marginRight:moderateScale(18),marginTop:moderateScale(25)}}>
      <View>
        <Text style={{fontSize:26,fontWeight:'400',color:'#fff'}}>
          Now Playing
        </Text>
        <FlatList
        data={nowplaying}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        decelerationRate={10}
        bounces={true}
        bouncesZoom={true}
        snapToInterval={width * 0.9}
        
        contentContainerStyle={{gap:55}}
        renderItem={({item, index}) => 
        <Movie
        shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('Details', {movieid: item.id});
            }}
            cardWidth={width * 3}
            isFirst={index == 0 ? true : false}
            isLast={index == nowplaying?.length - 1 ? true : false}
          title = {item.original_title} 
          path={baseImagePath('w780', item.poster_path)}
          genre={item.genre_ids.slice(1, 4)}
          vote_average={item.vote_average}
          vote_count={item.vote_count}
        />
        }
        />
      </View>
      {/* Popular */}
      <View style={{marginBottom:moderateScale(15),marginTop:moderateScale(20)}}>
        <Text style={{fontSize:26,fontWeight:'400',color:'#fff'}}>
          Popular
        </Text>
        <FlatList
        data={popular}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        decelerationRate={0}
        snapToInterval={width * 0.7 }
        contentContainerStyle={{gap:36}}
        renderItem={({item, index}) => 
        <Submovie
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('Details', {movieid: item.id});
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcominglist?.length - 1 ? true : false}
          title = {item.original_title} 
          path={baseImagePath('w342', item.poster_path)}
          />

        }
        />
      </View>
      {/* Upcoming */}
      <View>
        <Text style={{fontSize:26,fontWeight:'400',color:'#fff'}}>
          Upcoming 
        </Text>
        <FlatList
        data={upcoming}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        decelerationRate={1}
        bounces={false}
        snapToInterval={width * 0.7 }
        contentContainerStyle={{gap:36}}
        renderItem={({item, index}) => 
        <Submovie
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('Details', {movieid: item.id});
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcominglist?.length - 1 ? true : false}
          title = {item.original_title} 
          path={baseImagePath('w342', item.poster_path)}
          />
        }
        />
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default Homescreen