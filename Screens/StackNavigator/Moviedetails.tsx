import { View, Text, ActivityIndicator, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseImagePath, casteDetail, movieDetail } from '../../API/Apicall'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Fontfamily from '../../assets/Styles/Fontfamily'
import CasteCard from '../../Components/CasteCard'

const Moviedetails = ({navigation, route}: any) => {
  const Stack = createNativeStackNavigator();
  const [moviedata, setmoviedata]= useState<any>(undefined);
  const [castedata, setcastedata]= useState<any>(undefined);

  // Details
const getMoviedetail = async (movieid: number) => {
  console.log(movieDetail(movieid))
  try {
    let response  = await fetch(movieDetail(movieid));
    let json = await response.json();
    return json;
  } catch(error) {
    console.error('Something went wrong in detail API', error)
  }
};
// Caste
const getCaste = async (movieid: number) => {
  try {
    let response  = await fetch(casteDetail(movieid));
    let json = await response.json();
    return json;
  } catch(error) {
    console.error('Something went wrong in caste API', error)
  }
};
// Useeffect

useEffect(() => {
  (async () => {
    const tempMovieData = await getMoviedetail(route.params.movieid);
    setmoviedata(tempMovieData);
  })();

  (async () => {
    const tempMovieCastData = await getCaste(route.params.movieid);
    setcastedata(tempMovieCastData.cast);
  })();
}, []);


  return (
    <View style={{backgroundColor:'#242527',height:'100%'}}>
      <ScrollView>
        <View style={{marginLeft:moderateScale(12),marginRight:moderateScale(12),marginTop:moderateVerticalScale(15)}}>
          {/* Header */}
          <View>
            <View style={{flexDirection:'row',gap:15,marginTop:moderateScale(15)}}>
              <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/3114/3114883.png'}}
              style={{height:moderateScale(25),width:moderateScale(25),tintColor:'#fff'}}
              />
              </TouchableOpacity>
              <Text style={{color:'#fff',fontSize:21,fontWeight:'400'}}>Movie Details</Text>
            </View>
          </View>
          {/* Image */}
          <View style={{alignItems:'center',marginTop:moderateScale(35)}}>
          <Image 
          style={{width:moderateScale(236),height:moderateScale(353),borderRadius:15}}
          source={{uri: baseImagePath('w780', moviedata?.poster_path)}}/>
          </View>
          {/* Clock  */}
          <View style={{alignItems:'center',marginTop:moderateScale(20)}}>
            <View style={{flexDirection:'row',gap:10}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/2088/2088617.png'}}
              style={{height:moderateScale(21),width:moderateScale(21),tintColor:'#fff'}}
              />
              <Text style={{color:'#fff'}}>
            {Math.floor(moviedata?.runtime / 60)}h{' '}
            {Math.floor(moviedata?.runtime % 60)}m
          </Text>
            </View>
          </View>

      {/* Title */}
          <View style={{alignItems:'center',marginTop:moderateScale(5)}}>
            <View>
              <Text style={{color:'#fff',fontSize:24,fontWeight:'400',fontFamily:Fontfamily.Popins}}>{moviedata?.original_title}</Text>
            </View>
          </View>
          {/* Tag Line */}
          <View style={{alignItems:'center',marginTop:moderateScale(10)}}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'300',fontStyle:'italic'}}>{moviedata?.tagline}</Text>
          </View>

          {/* Rating  */}
          <View style={{marginTop:moderateScale(18),flexDirection:'row',gap:15}}>
            <View style={{flexDirection:"row",gap:8}}>
            <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'}}
              style={{height:moderateScale(21),width:moderateScale(21),}}
              />
              <Text style={{color:'#fff',paddingTop:moderateVerticalScale(3),fontSize:15,fontWeight:'500'}}> {moviedata?.vote_average.toFixed(1)} ({moviedata?.vote_count})</Text>
            </View>
            <Text style={{color:'#fff',fontSize:15,paddingTop:moderateScale(3),fontWeight:'500'}}>{moviedata?.release_date.substring(8, 10)}{' '}
              {new Date(moviedata?.release_date).toLocaleString('default', {
                month: 'long',
              })}{' '}
              {moviedata?.release_date.substring(0, 4)}</Text>
          </View>
          {/* Description */}
          <View>
            <View style={{marginTop:moderateScale(10)}}>
              <Text style={{color:'#fff',fontWeight:400,fontSize:16.5}}>{moviedata?.overview}</Text>
            </View>
          </View>
          {/* Caste */}
          <View style={{marginTop:moderateScale(12)}}>
            <Text style={{color:'#fff',fontSize:24,fontWeight:'500'}}>Top Cast</Text>
          </View>
          <View>
          <FlatList
            data={castedata}
            keyExtractor={(item: any) => item.id}
            horizontal
            contentContainerStyle={{gap:24}}
            renderItem={({item, index}) => (
              <CasteCard
              shouldMarginatedAtEnd={true}
              cardWidth={80}
              isFirst={index == 0 ? true : false}
              isLast={index == castedata?.length - 1 ? true : false}
              imagePath={baseImagePath('w185', item.profile_path)}
              title={item.original_name}
              subtitle={item.character}
              
              />
            )}
          />

          <View style={{alignItems:'center',marginTop:moderateScale(25),marginBottom:moderateScale(30)}}>
            <TouchableOpacity
            onPress={() => {
              navigation.push('Booking', {
                moviedata:moviedata,
                BgImage: baseImagePath('w780', moviedata.backdrop_path),
                PosterImage: baseImagePath('original', moviedata.poster_path),
              });
            }}
            style={{borderWidth:1,width:moderateScale(350),height:moderateScale(45),backgroundColor:'yellow',borderRadius:50}}
            >
              <Text style={{fontSize:20,color:'black',textAlign:'center',fontWeight:'800',paddingTop:moderateScale(10)}}>Select your Seats</Text>
            </TouchableOpacity>
          </View>
          </View>











        </View>
      </ScrollView>
    </View>
  )
}

export default Moviedetails