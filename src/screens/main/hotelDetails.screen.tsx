import {View, Text} from 'react-native';
import React from 'react';
import {Hotel} from './places.screen';
import styles from './hotelDetails.style';
import {dummyData} from '../../utils';

type Props = {
  navigation: any;
  route: any;
};

const HotelDetails: React.FC<Props> = ({navigation, route}) => {
  // const hotel = route.params.hotel;
  const hotel = dummyData.countries[0].places[0].hotels[0];
  return (
    <View style={styles.mainContainer}>
      <Text>{hotel.name}</Text>
    </View>
  );
};

export default HotelDetails;
