import {View, Text, ImageBackground, Image, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {icons, theme} from '../../utils';
import styles from './places.styles';
import {
  ButtonType,
  CustomButton,
  Header,
  IconName,
  IconType,
  Rating,
} from '../../components';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import formatAmount from '../../utils/formatAmount';

type Props = {
  navigation: any;
  route: any;
};

export type Hotel = {
  id: string;
  name: string;
  image: any;
  rate: number;
  price: number;
  latlng: {
    latitude: number;
    longitude: number;
  };
};
const Places: React.FC<Props> = ({navigation, route}) => {
  const place = route.params.selectedPlace;
  const [selectedHotel, setSelectedHotel] = useState<Hotel>();
  const [allowDragging, setAllowDragging] = useState(true);

  const _draggedValue = useRef(new Animated.Value(0)).current;
  let _panelRef = useRef(null) as any;

  useEffect(() => {
    _draggedValue.addListener(valueObj => {
      if (valueObj.value > theme.SIZES.HEIGHT) {
        setAllowDragging(false);
      }
    });
    return () => {
      _draggedValue.removeAllListeners();
    };
  }, [_draggedValue]);

  const renderPlace = () => {
    return (
      <ImageBackground source={place?.image} style={styles.imageBackground}>
        <Header title={''} leftOnPress={() => navigation.goBack()} />
        <View style={styles.placeDetailsContainer}>
          <View style={styles.nameAndRatingsContainer}>
            <Text style={styles.placeName}>{place?.name}</Text>
            <View style={styles.placeRatingsContainer}>
              <Text style={styles.placeRate}>{place?.rate}</Text>
              <Image source={icons.star} style={styles.star} />
            </View>
          </View>
          <Text style={styles.description}>{place?.description}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              btnText="Book a flight"
              btnType={ButtonType.SECONDARY}
              icon={IconName.PLANE}
              iconType={IconType.FONT_AWESOME}
              onPress={() => {}}
            />
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderMap = () => {
    return (
      <SlidingUpPanel
        ref={c => (_panelRef = c)}
        draggableRange={{top: theme.SIZES.HEIGHT + 120, bottom: 120}}
        showBackdrop={false}
        snappingPoints={[theme.SIZES.HEIGHT + 120]}
        height={theme.SIZES.HEIGHT + 120}
        friction={0.7}
        allowDragging={allowDragging}
        animatedValue={_draggedValue}
        onBottomReached={() => setAllowDragging(true)}
        minimumVelocityThreshold={2}
        minimumDistanceThreshold={5}>
        <View style={styles.mapContainer}>
          {/***********Panel Header */}
          <View style={styles.panelHeader}>
            <Image source={icons.up_arrow} style={styles.upArrow} />
            <Text style={styles.swipeText}>SWIPE FOR DETAILS</Text>
          </View>
          {/******************Panel details */}
          <View style={styles.panelDetailsContainer}>
            <MapView
              style={styles.mapView}
              provider={PROVIDER_GOOGLE}
              initialRegion={place?.mapInitialRegion}
              // customMapStyle={mapstyle}
            >
              {place?.hotels.map((hotel: any, index: any) => (
                <Marker
                  key={index}
                  coordinate={hotel.latlng}
                  identifier={hotel.id}
                  onPress={() => setSelectedHotel(hotel)}>
                  <Image
                    source={
                      selectedHotel?.id === hotel.id
                        ? icons.bed_on
                        : icons.bed_off
                    }
                    resizeMode="contain"
                    style={styles.bedMarker}
                  />
                </Marker>
              ))}
            </MapView>
            <Header
              title={place?.name}
              leftOnPress={() => _panelRef.hide()}
              right
              containerStyle={styles.mapHeader}
            />

            {/**********Render hotel details */}
            {selectedHotel && (
              <View style={styles.hotelDetailsContainer}>
                <Text style={styles.hotelsIn}>Hotels in {place?.name}</Text>
                <View style={styles.hotelDetailsCard}>
                  <Image
                    source={selectedHotel.image} //TODO: change to dynamic image
                    resizeMode="cover"
                    style={styles.hotelImage}
                  />
                  <View style={styles.hotelDetails}>
                    <Text style={styles.hotelName}>{selectedHotel.name}</Text>
                    <Rating
                      rate={selectedHotel.rate}
                      containerStyle={styles.ratingContainerStyle}
                    />
                    <View style={styles.bottomContainer}>
                      <CustomButton
                        btnText="Details"
                        btnType={ButtonType.SECONDARY}
                        onPress={() =>
                          navigation.navigate('HotelDetails', {
                            hotel: selectedHotel,
                          })
                        }
                      />
                      <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                          from {formatAmount({amount: selectedHotel.price})} per
                          night
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </SlidingUpPanel>
    );
  };

  return (
    <View style={styles.placeContainer}>
      {renderPlace()}
      {renderMap()}
    </View>
  );
};

export default Places;
