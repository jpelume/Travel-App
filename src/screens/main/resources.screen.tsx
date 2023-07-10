import {View, Text} from 'react-native';
import React from 'react';
import styles from './resources.style';
import {Map, NavOptions} from '../../components';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {
  getTravelInformation,
  setDestination,
} from '../../redux/navigation/slices/nav.slice';

type Props = any;

const Resources: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const travelInformation = useAppSelector(getTravelInformation);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Fine Waka</Text>
      <GooglePlacesAutocomplete
        placeholder="Where To?"
        styles={{
          container: {
            flex: 0,
            width: '95%',
            alignContent: 'center',
            alignSelf: 'center',
            marginHorizontal: 10,
            marginVertical: 5,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: {
                latitude: details?.geometry.location.lat,
                longitude: details?.geometry.location.lng,
              },
              description: data.description,
            }),
          );
        }}
        fetchDetails={true}
        // returnKeyType={'search'}
        nearbyPlacesAPI="GooglePlacesSearch"
        minLength={2}
        enablePoweredByContainer={false}
        debounce={400}
        query={{
          key: 'AIzaSyBLvVhTbRK5jQWq7DzzV-FYwMabv85bO-g',
          language: 'en',
        }}
      />
      <NavOptions />
      <View style={styles.travelInfoContainer}>
        <Text>
          {travelInformation ? Math.ceil(travelInformation?.time) : 0} min
          {travelInformation?.time !== 1 && 's'}
        </Text>
        <Text>
          {' '}
          {travelInformation ? Math.ceil(travelInformation?.distance) : 0}
          km
        </Text>
      </View>
      <Map />
      <Text>Resources</Text>
    </View>
  );
};

export default Resources;
