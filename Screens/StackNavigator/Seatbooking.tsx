
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


const timeArray: string[] = [
  '10:30',
  '12:30',
  '14:30',
  '15:00',
  '19:30',
  '21:00',
];

const generateDate = () => {
  const date = new Date();
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let weekdays = [];
  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};
const generateSeats = () => {
  let numRow = 8;
  let numColumn = 3;
  let rowArray = [];
  let start = 1;
  let reachnine = false;

  for (let i = 0; i < numRow; i++) {
    let columnArray = [];
    for (let j = 0; j < numColumn; j++) {
      let seatObject = {
        number: start,
        taken: Boolean(Math.round(Math.random())),
        selected: false,
      };
      columnArray.push(seatObject);
      start++;
    }
    if (i == 3) {
      numColumn += 2;
    }
    if (numColumn < 9 && !reachnine) {
      numColumn += 2;
    } else {
      reachnine = true;
      numColumn -= 2;
    }
    rowArray.push(columnArray);
  }
  return rowArray;
};

const Seatbooking = ({ navigation, route }: any) => {
  const { moviedata } = route.params;

  const [dateArray, setDateArray] = useState<any[]>(generateDate());
  const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [twoDSeatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
  const [selectedSeatArray, setSelectedSeatArray] = useState([]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>();


  const selectSeat = (index: number, subindex: number, num: number) => {
    if (!twoDSeatArray[index][subindex].taken) {
      let array: any = [...selectedSeatArray];
      let temp = [...twoDSeatArray];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(num)) {
        array.push(num);
        setSelectedSeatArray(array);
      } else {
        const tempindex = array.indexOf(num);
        if (tempindex > -1) {
          array.splice(tempindex, 1);
          setSelectedSeatArray(array);
        }
      }
      setPrice(array.length * 150.0);
      setTwoDSeatArray(temp);
    }
  };


  const BookSeats = async () => {
    if (
      selectedSeatArray.length !== 0 &&
      timeArray[selectedTimeIndex] !== undefined &&
      dateArray[selectedDateIndex] !== undefined
    ) {
      try {
        await AsyncStorage.setItem(
          'ticket',
          JSON.stringify({
            seatArray: selectedSeatArray,
            time: timeArray[selectedTimeIndex],
            date: dateArray[selectedDateIndex],
            ticketImage: route.params.PosterImage,
          }),
        );
      } catch (error) {
        console.error(
          'Something went Wrong while storing in BookSeats Functions',
          error,
        );
      }
      navigation.navigate('Ticket', {
        Title: moviedata.original_title,
        seatArray: selectedSeatArray,
        time: timeArray[selectedTimeIndex],
        date: dateArray[selectedDateIndex],
        ticketImage: route.params.PosterImage,
      });
    } else {
      ToastAndroid.showWithGravity(
        'Please Select Seats, Date and Time of the Show',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };

  return (
    <View style={{ backgroundColor: '#242527', height: '100%' }}>
      <ScrollView>
        <View style={{ marginLeft: moderateScale(12), marginRight: moderateScale(12), marginTop: moderateVerticalScale(15),marginBottom:moderateVerticalScale(10) }} >
          {/* Header */}
          <View style={{ flexDirection: 'row', gap: 15, marginTop: moderateScale(15) }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' }}
                style={{ height: moderateScale(25), width: moderateScale(25), tintColor: '#fff' }}
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 21, fontWeight: '400' }}>{moviedata.original_title}</Text>
          </View>
          {/* Poster Image */}
          <View style={{ marginTop: moderateVerticalScale(25) }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: route.params?.PosterImage }}
                style={{ height: moderateVerticalScale(270), width: moderateScale(180) }}
              />
            </View>
          </View>

          {/* Seat */}
          <View style={[styles.seatContainer]} >
            <View style={[styles.containerGap20]}>
              {twoDSeatArray?.map((item, index) => {
                return (
                  <View key={index} style={[styles.seatRow]}>
                    {item?.map((subitem, subindex) => {
                      return (
                        <TouchableOpacity

                          key={subitem.number}
                          onPress={() => {
                            selectSeat(index, subindex, subitem.number);
                          }}>
                            <View>
                          <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1036/1036790.png' }}
                            style={[styles.seat,subitem.taken ? {tintColor: 'grey'} : {},subitem.selected ? {tintColor: 'yellow'} : {},]}
                            
                            
                            // tintColor='yellow'
                            // subitem.taken ? {color: COLORS.Grey} : {},
                            // subitem.selected ? {color: COLORS.Orange} : {},
                            // https://cdn-icons-png.flaticon.com/512/7454/7454753.png
                          />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
          {/* Agenda */}
          <View style={{marginTop:moderateVerticalScale(5)}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
              <View style={{alignItems:'center'}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1036/1036790.png'}}
                style={{height:moderateVerticalScale(22),width:moderateScale(22)}}
                />
                <Text style={{fontSize:19,color:'#AEAEAE'}}>Available</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1036/1036790.png'}}
                style={{height:moderateVerticalScale(22),width:moderateScale(22)}}
                tintColor='grey'
                />
                <Text style={{fontSize:19,color:'#AEAEAE'}}>Taken</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1036/1036790.png'}}
                style={{height:moderateVerticalScale(22),width:moderateScale(22)}}
                tintColor='yellow'
                />
                <Text style={{fontSize:19,color:'#AEAEAE'}}>Selected</Text>
              </View>
            </View>
          </View>
          {/* Date */}
          <View style={{ marginTop: moderateVerticalScale(30) }}>
            <FlatList
              data={dateArray}
              keyExtractor={item => item.date}
              horizontal showsHorizontalScrollIndicator={false}
              decelerationRate={12}
              bounces={false}
              contentContainerStyle={{ gap: 24 }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => setSelectedDateIndex(index)}>
                    <View style={[
                      styles.dateContainer,
                      index == selectedDateIndex
                        ? { backgroundColor: 'yellow' }
                        : {},
                    ]}>
                      <Text style={[styles.date, index == selectedDateIndex
                        ? { color: '#000000' }
                        : {},]}>{item.date}</Text>
                      <Text style={[styles.date, index == selectedDateIndex
                        ? { color: '#000000' }
                        : {},]}>{item.day}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Timing */}
          <View style={{ marginTop: moderateVerticalScale(20) }} >
            <FlatList
              data={timeArray}
              keyExtractor={item => item}
              horizontal
              bounces={false}
              contentContainerStyle={{ gap: 24 }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => setSelectedTimeIndex(index)}>
                    <View style={[
                      styles.timeContainer,
                      index == selectedTimeIndex
                        ? { backgroundColor: 'yellow' }
                        : {},
                    ]}>
                      <Text style={[styles.Time, index == selectedTimeIndex
                        ? { color: '#000000' }
                        : {}]} >{item}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Total Price */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(35),  }}>
            <View style={{}}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Total Price </Text>
              <Text style={{ color: '#fff', fontSize: 18 }}>Rs. {price}</Text>
            </View>
            <View style={{ borderWidth: 1, width: moderateScale(195), height: moderateVerticalScale(35), borderRadius: 20, alignItems: 'center', backgroundColor: 'yellow' }}>
              <TouchableOpacity 
              onPress={BookSeats}
              style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: '#000', fontWeight: '500', fontSize: 18 }}>Buy Tickets</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    width: moderateScale(45),
    height: moderateVerticalScale(66),
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  timeContainer: {
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#242428',
    paddingHorizontal: 25,
    borderRadius: 25,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontWeight: '600',
    color: '#fff'
  },
  Time: {
    fontWeight: '600',
    color: '#fff'
  },
  seatContainer: {
    marginVertical: moderateVerticalScale(20),
  },
  containerGap20: {
    gap: 20,
  },
  seatRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  seatIcon: {
    color: '#fff',
  },
  seat: {
    height:moderateVerticalScale(25),
    width:moderateScale(25),

  }
});

export default Seatbooking;
