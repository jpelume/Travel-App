import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useRef} from 'react';
import {dummyData, icons, theme} from '../../utils';
import styles from './places.styles';
import {
  ButtonType,
  CustomButton,
  Header,
  IconName,
  IconType,
} from '../../components';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import mapstyle from './map.styles';

type Props = {
  navigation: any;
  route: any;
};
const Places: React.FC<Props> = ({navigation, route}) => {
  // const place = route.params.selectedPlace;
  const place = dummyData.countries[3].places[0];

  let _panelRef = useRef(null);

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
              customMapStyle={mapstyle}></MapView>
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
