import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: theme.COLORS.transparentBlack1,
  },
  mainContainer: {
    width: theme.SIZES.WIDTH * 0.95,
    height: theme.SIZES.HEIGHT * 0.4,
    backgroundColor: theme.COLORS.white,
    borderRadius: theme.SIZES.radius,
    padding: theme.SIZES.padding,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  contentContainer: {
    rowGap: 20,
  },
  marginX: {
    marginHorizontal: 20,
  },
  departingContainer: {
    width: '50%',
    alignItems: 'center',
    padding: theme.SIZES.padding,
    borderRadius: theme.SIZES.radius,
  },
  activeOpacity: {
    backgroundColor: theme.COLORS.lightGray,
  },
  heading: {
    fontSize: theme.SIZES.h2,
    fontWeight: '500',
    color: theme.COLORS.black,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: theme.SIZES.h3,
    fontWeight: '500',
    color: theme.COLORS.PRIMARY_TEXT,
  },
  bold: {
    fontWeight: '800',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  textStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: theme.COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: theme.COLORS.white,
  },
});

export default styles;
