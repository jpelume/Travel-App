import {Platform, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.DARK,
  },
  renderContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.SIZES.padding,
    paddingVertical: theme.SIZES.base,
    alignItems: 'center',
  },
  sideDrawerContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideDrawer: {
    width: 25,
    height: 25,
    tintColor: theme.COLORS.white,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: theme.COLORS.white,
  },
  profileWrapper: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  contentContainer: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 0,
  },
  countriesPlacesContainer: {
    height: theme.SIZES.HEIGHT / 1.2,
    // height: 700
  },
  countryName: {
    color: theme.COLORS.white,
    marginTop: 3,
    fontSize: theme.SIZES.H4,
  },
  placesContainer: {
    height: theme.SIZES.HEIGHT / 1.7,
    // height: 500,
  },
  placesContentContainerStyle: {
    alignItems: 'center',
  },
  placeNameContainer: {
    // flex: 1,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    marginHorizontal: theme.SIZES.padding,
  },
  placesName: {
    marginBottom: theme.SIZES.radius,
    color: theme.COLORS.white,
    fontSize: theme.SIZES.h1,
    lineHeight: 36,
    fontWeight: '700',
  },
  description: {
    marginBottom: theme.SIZES.padding * 2,
    textAlign: 'center',
    color: theme.COLORS.white,
    fontSize: theme.SIZES.body3,
    lineHeight: 22,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -40,
  },
});

export default styles;
