import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {dummyData, icons} from '../../utils';
import styles from './places.styles';
import {
  ButtonType,
  CustomButton,
  Header,
  IconName,
  IconType,
} from '../../components';

type Props = {
  navigation: any;
  route: any;
};
const Places: React.FC<Props> = ({navigation, route}) => {
  // const place = route.params.selectedPlace;
  const place = dummyData.countries[0].places[0];
  const renderPlace = () => {
    return (
      <ImageBackground source={place?.image} style={styles.imageBackground}>
        <Header title={''} />
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
  return <View style={styles.placeContainer}>{renderPlace()}</View>;
};

export default Places;
