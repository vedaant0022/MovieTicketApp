import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { baseImagePath, searchMovies } from '../../API/Apicall';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Searchbar from '../../Components/Searchbar';
import SubMovieCard from '../../Components/SubMovieCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Search = ({navigation}: any) => {
  const Stack = createNativeStackNavigator();
  const [searchList, setSearchList] = useState([]);
  
  const searchMoviesFunction = async (name: string) => {
    console.log(searchMovies(name))
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error('Something went wrong in searchMoviesFunction ', error);
    }
  };
  return (
    <View style={{backgroundColor:'#242527',flex:1}}>
      <View style={{marginLeft:moderateScale(12),marginRight:moderateScale(12),marginTop:moderateVerticalScale(15)}}>
      <View style={{flexDirection:'row',gap:10,justifyContent:'center'}}>
          <Image
          source={{uri:'https://cdn-icons-png.flaticon.com/512/711/711917.png'}}
          style={{height:moderateScale(25),width:moderateScale(25),tintColor:'yellow',marginTop:moderateScale(5)}}
          />
          <Text style={{color:'#fff',fontSize:28,fontStyle:'italic'}}>Ticketopia</Text>
        </View>
        <View style={{marginTop:moderateScale(20)}}>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View >
              <Searchbar searchFunction={searchMoviesFunction} />
            </View>
          }
          renderItem={({item, index}) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('Details', {movieid: item.id});
              }}
              
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
        </View>
      </View>
    </View>
  )
}

export default Search