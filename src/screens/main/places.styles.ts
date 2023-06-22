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
});

export default styles;
