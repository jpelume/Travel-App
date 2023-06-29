/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './home.style';
import {dummyData, icons, images, theme} from '../../utils';
import {ScrollView} from 'react-native';
import {ButtonType, CustomButton} from '../../components';
import {BackHandler} from 'react-native';

type Props = {
  navigation: any;
};

const COUNTRIES_ITEM_SIZE = theme.SIZES.WIDTH / 3;
const PLACES_ITEM_SIZE = theme.SIZES.WIDTH / 1.2;
const EMPTY_ITEM_SIZE = (theme.SIZES.WIDTH - PLACES_ITEM_SIZE) / 2;

const Home: React.FC<Props> = ({navigation}) => {
  const countryScrollX = useRef(new Animated.Value(0)).current;
  const placesScrollX = useRef(new Animated.Value(0)).current;
  const [placesIndex, setPlacesIndex] = useState(0);
  const [continent, setContinent] = useState('Africa');

  const countries = [{id: -1}, ...dummyData.countries, {id: -2}] as any;

  const [places, setPlace] = useState([
    {id: -1},
    ...dummyData.countries[0].places,
    {id: -2},
  ]) as any;

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  function renderHeader() {
    return (
      <View style={styles.renderContainer}>
        {/**Side drawer */}
        <TouchableOpacity
          style={styles.sideDrawerContainer}
          onPress={() => console.log('side drawer!!')}>
          <Image
            source={icons.side_drawer}
            resizeMode={'contain'}
            style={styles.sideDrawer}
          />
        </TouchableOpacity>

        {/***Label Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{continent}</Text>
        </View>

        {/***Profile */}
        <TouchableOpacity onPress={() => console.log('profile')}>
          <Image
            source={images.profile_pic}
            resizeMode={'contain'}
            style={styles.profileWrapper}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const renderCountries = () => {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        bounces={false}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        data={countries}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: countryScrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          const position = (
            event.nativeEvent.contentOffset.x / COUNTRIES_ITEM_SIZE
          ).toFixed(0) as any;
          setContinent(dummyData.countries[position].continent);

          setPlace([
            {id: -1},
            ...dummyData.countries[position].places,
            {id: -2},
          ]);
        }}
        renderItem={({item, index}) => {
          const opacity = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRIES_ITEM_SIZE,
              (index - 1) * COUNTRIES_ITEM_SIZE,
              index * COUNTRIES_ITEM_SIZE,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const mapSize = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRIES_ITEM_SIZE,
              (index - 1) * COUNTRIES_ITEM_SIZE,
              index * COUNTRIES_ITEM_SIZE,
            ],
            outputRange: [25, 60, 25],
            extrapolate: 'clamp',
          });

          const fontSize = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRIES_ITEM_SIZE,
              (index - 1) * COUNTRIES_ITEM_SIZE,
              index * COUNTRIES_ITEM_SIZE,
            ],
            outputRange: [15, 25, 15],
            extrapolate: 'clamp',
          });

          if (index === 0 || index === countries.length - 1) {
            return (
              <View
                style={{
                  width: COUNTRIES_ITEM_SIZE,
                }}
              />
            );
          } else {
            return (
              <Animated.View
                opacity={opacity}
                style={{
                  height: 130,
                  width: COUNTRIES_ITEM_SIZE,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Animated.Image
                  source={item.image}
                  resizeMode={'contain'}
                  style={{
                    width: mapSize,
                    height: mapSize,
                    tintColor: theme.COLORS.white,
                  }}
                />
                <Animated.Text
                  style={[styles.countryName, {fontSize: fontSize}]}>
                  {item.name}
                </Animated.Text>
              </Animated.View>
            );
          }
        }}
      />
    );
  };

  const exploreButtonHandler = () => {
    navigation.navigate('Places', {
      selectedPlace: places[placesIndex * 1 + 1],
    });
  };

  const renderPlaces = () => {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={places}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.placesContentContainerStyle}
        snapToAlignment={'center'}
        snapToInterval={PLACES_ITEM_SIZE}
        scrollEventThrottle={16}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: placesScrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          const position = (
            event.nativeEvent.contentOffset.x / PLACES_ITEM_SIZE
          ).toFixed(0) as any;

          setPlacesIndex(position);
        }}
        renderItem={({item, index}) => {
          const opacity = placesScrollX.interpolate({
            inputRange: [
              (index - 2) * PLACES_ITEM_SIZE,
              (index - 1) * PLACES_ITEM_SIZE,
              index * PLACES_ITEM_SIZE,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          let activeHeight = theme.SIZES.HEIGHT / 1.8;

          const height = placesScrollX.interpolate({
            inputRange: [
              (index - 2) * PLACES_ITEM_SIZE,
              (index - 1) * PLACES_ITEM_SIZE,
              index * PLACES_ITEM_SIZE,
            ],
            outputRange: [
              theme.SIZES.HEIGHT / 2.25,
              activeHeight,
              theme.SIZES.HEIGHT / 2.25,
            ],
            extrapolate: 'clamp',
          });
          if (index === 0 || index === places.length - 1) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          } else {
            return (
              <Animated.View
                opacity={opacity}
                style={{
                  width: PLACES_ITEM_SIZE,
                  height: height,
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 10,
                }}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
                <View style={styles.placeNameContainer}>
                  <Text style={styles.placesName}>{item.name}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.buttonContainer}>
                    <CustomButton
                      btnType={ButtonType.SECONDARY}
                      btnText="Explore"
                      onPress={exploreButtonHandler}
                    />
                  </View>
                </View>
              </Animated.View>
            );
          }
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderHeader()}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.countriesPlacesContainer}>
          {/* countries  */}
          <View>{renderCountries()}</View>
          <View style={styles.placesContainer}>{renderPlaces()}</View>
        </View>
        {/* places */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
