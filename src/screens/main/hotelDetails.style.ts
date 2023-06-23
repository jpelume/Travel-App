import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: theme.COLORS.white,
  },
  bottomContainer: {
    padding: theme.SIZES.padding,
    rowGap: 24,
  },
  hotelImage: {
    height: theme.SIZES.HEIGHT * 0.5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: theme.SIZES.padding,
  },
  dealCard: {
    position: 'absolute',
    bottom: theme.SIZES.padding,
    right: theme.SIZES.padding,
    backgroundColor: theme.COLORS.lightGray,
    padding: theme.SIZES.padding / 1.5,
    borderRadius: 14,
    rowGap: 10,
  },
  discountText: {
    fontSize: theme.SIZES.H3,
  },
  row: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  dealText: {
    fontSize: theme.SIZES.h3,
  },
  greatText: {
    color: theme.COLORS.SUCCESS,
  },
  goodText: {
    color: theme.COLORS.WARNING,
  },
  badText: {
    color: theme.COLORS.ERROR,
  },
  hotelDetailsContainer: {
    padding: theme.SIZES.padding,
  },
  hotelName: {
    fontSize: theme.SIZES.h1,
    color: theme.COLORS.DARK,
    fontWeight: '500',
  },
  ratingReviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  rateText: {
    fontSize: theme.SIZES.h3,
    fontWeight: '500',
    color: theme.COLORS.PRIMARY_TEXT,
  },
});

export default styles;
