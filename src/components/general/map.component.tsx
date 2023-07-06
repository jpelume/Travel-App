import {View, Text, PermissionsAndroid} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './map.styles';
const Map: React.FC<any> = () => {
  const [location, setLocation] = useState() as any;
  const mapRef = useRef(null);

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

  requestLocationPermission();
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

export default Map;
