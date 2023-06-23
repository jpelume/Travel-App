/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './hotelDetails.style';
import {dummyData, theme} from '../../utils';
import {ButtonType, CustomButton, Header, Rating} from '../../components';
import formatAmount from '../../utils/formatAmount';
import CheckBox from 'react-native-check-box';

type Props = {
  navigation: any;
  route: any;
};

const HotelDetails: React.FC<Props> = ({navigation, route}) => {
  const hotel = route.params.hotel;
  // const hotel = dummyData.countries[0].places[0].hotels[0];
  const discount = Math.round(Math.random() * 20);
  const reviews = Math.round(Math.random() * 200 + 100);
  const available = Math.round(Math.random());
  const freeCancelation = Math.round(Math.random());

  useEffect(() => {}, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <ImageBackground source={hotel.image} style={styles.hotelImage}>
          <Header
            title={''}
            containerStyle={styles.header}
            leftOnPress={() => navigation.goBack()}
          />
          <View style={styles.dealCard}>
            <Text style={styles.discountText}>{discount}% less than usual</Text>
            <View style={styles.row}>
              <View
                style={{
                  padding: 10,
                  backgroundColor:
                    discount > 10
                      ? `${theme.COLORS.SUCCESS}10`
                      : discount > 5
                      ? `${theme.COLORS.WARNING}10`
                      : `${theme.COLORS.ERROR}10`,
                  borderRadius: theme.SIZES.radius,
                }}>
                <Text
                  style={[
                    styles.dealText,
                    discount > 10
                      ? styles.greatText
                      : discount > 10
                      ? styles.goodText
                      : styles.badText,
                  ]}>
                  {discount > 10 ? 'Great' : discount > 5 ? 'Good' : 'Bad'} deal
                </Text>
              </View>
              <Text
                style={[
                  styles.dealText,
                  discount > 10
                    ? styles.greatText
                    : discount > 5
                    ? styles.goodText
                    : styles.badText,
                ]}>
                {formatAmount({
                  amount: hotel.price - (hotel.price * discount) / 100,
                })}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.hotelDetailsContainer}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.ratingReviewContainer}>
            <View style={styles.ratingContainer}>
              <Text style={styles.rateText}>{hotel.rate}</Text>
              <Rating rate={hotel.rate} />
            </View>
            <Text style={styles.rateText}>{reviews} reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.row, styles.justifyBetween]}>
          <CustomButton
            btnType={ButtonType.SECONDARY}
            btnText={'Check availability'}
            onPress={() => {}}
          />
          <View style={styles.row}>
            <Text style={styles.rateText}>Free cancelation</Text>
            <CheckBox isChecked={!!freeCancelation} onClick={() => {}} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.rateText}>Check in</Text>
          <Text style={styles.rateText}>/</Text>
          <Text style={styles.rateText}>Check out</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rateText}>From</Text>
          <Text style={styles.rateText}>to</Text>
        </View>
      </View>
    </View>
  );
};

export default HotelDetails;
