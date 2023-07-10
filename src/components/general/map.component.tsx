import {View, Text, PermissionsAndroid, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import styles from './map.styles';
import {
  getDestination,
  getOrigin,
  setOrigin,
  setTravelInformation,
} from '../../redux/navigation/slices/nav.slice';
import MapView, {Callout, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {images} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../redux/typings';

const Map: React.FC<any> = () => {
  const [location, setLocation] = useState() as any;
  const origin = useAppSelector(getOrigin);
  const destination = useAppSelector(getDestination);
  const mapRef = useRef(null);
  const dispatch = useAppDispatch();

  const sites = [
    {
      name: 'The Golden Jubilee Monument',
      location: {
        latitude: 4.1579862,
        longitude: 9.2280593,
      },
    },
    {
      name: 'Mount Fako',
      location: {
        latitude: 4.2174418,
        longitude: 9.1551951,
      },
    },
    {
      name: 'Alcef Rivera Park',
      location: {
        latitude: 4.0559,
        longitude: 9.2198755,
      },
    },
  ];

  useEffect(() => {
    const requestLocationPermission = async () => {
      console.log('requesting permission');
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message: 'Can we access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
          console.log('You can use Geolocation');
          return true;
        } else {
          console.log('You cannot use Geolocation');
          return false;
        }
      } catch (err) {
        return false;
      }
    };
    const getLocation = () => {
      if (!location) {
        const request = requestLocationPermission();

        request.then(res => {
          if (res) {
            Geolocation.getCurrentPosition(
              position => {
                console.log('current position: ', position);
                setLocation(position);
                dispatch(
                  setOrigin({
                    location: {
                      longitude: position?.coords?.longitude,
                      latitude: position?.coords?.latitude,
                    },
                  }),
                );
              },
              error => {
                console.log(error.code, error.message);
              },
              {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
          }
        });
      }
    };

    getLocation();
  }, [dispatch, location]);

  return (
    <>
      {location && (
        <MapView
          ref={mapRef}
          style={{width: '100%', height: '50%'}}
          region={{
            longitude: location.coords?.longitude,
            latitude: location.coords?.latitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsTraffic={true}>
          {destination ? (
            <>
              <Marker
                key={'origin_marker'}
                coordinate={origin?.location}
                identifier="origin">
                <Callout>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 40,
                    }}
                    source={images.profile_pic}
                  />
                  <Text>{location?.coords?.latitude}</Text>
                </Callout>
              </Marker>
              <Marker
                key={'destination_marker'}
                coordinate={destination?.location}
                identifier="destination">
                <Callout>
                  <View>
                    <Text>{destination?.description}</Text>
                  </View>
                </Callout>
              </Marker>
              <MapViewDirections
                origin={origin?.location}
                destination={destination?.location}
                apikey="AIzaSyBLvVhTbRK5jQWq7DzzV-FYwMabv85bO-g"
                strokeWidth={3}
                strokeColor="red"
                onReady={(result: any) => {
                  dispatch(setTravelInformation(null));
                  dispatch(
                    setTravelInformation({
                      time: result.duration,
                      distance: result.distance,
                    }),
                  );
                }}
              />
            </>
          ) : (
            <Marker
              key={location?.timestamp}
              coordinate={{
                longitude: location.coords?.longitude,
                latitude: location.coords?.latitude,
              }}>
              <Callout>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 40,
                  }}
                  source={images.profile_pic}
                />
              </Callout>
            </Marker>
          )}
        </MapView>
      )}
    </>
  );
};

export default Map;
