import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  placeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  placeDetailsContainer: {
    flex: 1,
    paddingHorizontal: theme.SIZES.padding,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  nameAndRatingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeName: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.LARGE_TITLE,
    fontWeight: '800',
  },
  placeRatingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeRate: {
    marginRight: 5,
    color: theme.COLORS.white,
    fontSize: theme.SIZES.h3,
    fontWeight: '600',
  },
  star: {
    height: 20,
    width: 20,
  },
  description: {
    color: theme.COLORS.white,
    marginTop: theme.SIZES.base,
    fontSize: theme.SIZES.h3,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: theme.SIZES.padding,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  panelHeader: {
    height: 120,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upArrow: {
    width: 20,
    height: 20,
    tintColor: theme.COLORS.white,
  },
  swipeText: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.h3,
    fontWeight: '600',
    lineHeight: 22,
  },
  panelDetailsContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    width: '100%',
    height: '100%',
  },
  bedMarker: {
    width: 50,
    height: 50,
  },
  mapHeader: {
    position: 'absolute',
    top: theme.SIZES.padding * 2,
  },
  placeHeader: {
    position: 'absolute',
    top: theme.SIZES.padding,
  },
  hotelDetailsContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    padding: theme.SIZES.radius,
  },
  hotelsIn: {
    color: theme.COLORS.LIGTH_DARK,
    fontSize: theme.SIZES.h1,
    fontWeight: '600',
    lineHeight: 33,
  },
  hotelDetailsCard: {
    flexDirection: 'row',
    marginTop: theme.SIZES.radius,
    padding: theme.SIZES.radius,
    borderRadius: 25,
    backgroundColor: theme.COLORS.transparentBlack1,
  },
  hotelImage: {
    width: 90,
    height: 120,
    borderRadius: 15,
  },
  hotelDetails: {
    flex: 1,
    marginLeft: theme.SIZES.radius,
    justifyContent: 'center',
  },
  hotelName: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.h3,
    fontWeight: '600',
    lineHeight: 22,
  },
  ratingContainerStyle: {
    marginTop: theme.SIZES.base,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: theme.SIZES.base,
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceText: {
    color: theme.COLORS.lightGray,
    fontSize: theme.SIZES.body5,
    lineHeight: 22,
  },
});

export default styles;
