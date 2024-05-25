import { View, Text, Dimensions, Image, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { moderateVerticalScale } from 'react-native-size-matters';

const Slider = () => {
  const screenWidth = Dimensions.get("window").width;
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const Data = [
		{
			id: "01",
			image: require("../assets/Images/car1.png"),
		},
		{
			id: "02",
			image: require("../assets/Images/car2.png"),
		},
		{
			id: "03",
			image: require("../assets/Images/car3.jpg"),
		},
		{
			id: "04",
			image: require("../assets/Images/car4.jpg"),
		}

		
	];
  const renderItem = ({ item }) => {
		return (
			<View>
				<Image
					source={item.image}
					style={{ width:screenWidth,height:moderateVerticalScale(540),borderRadius:20 }}
				/>
			</View>
		);
	};
  // 
  useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === Data.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 2000);

		return () => clearInterval(interval);
	});

  const handleScroll = (event) => {
		// Get the scroll position
		const scrollPosition = event.nativeEvent.contentOffset.x;
		console.log({ scrollPosition });
		// Get the index of current active item

		const index = scrollPosition /screenWidth ;

		console.log({ index });
		// Update the index

		setActiveIndex(index);
	};

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});
  // Dots
  const renderDotIndicators = () => {
		return Data.map((dot, index) => {
			// if the active index === index

			if (activeIndex === index) {
				return (
					<View
						style={{
							backgroundColor: "green",
							height: 10,
							width: 10,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={index}
						style={{
							backgroundColor: "red",
							height: 10,
							width: 10,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			}
		});
	};
  return (
    <View>
			<FlatList
				data={Data}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				pagingEnabled={true}
				onScroll={handleScroll}
			/>
		</View>
  )
}

export default Slider