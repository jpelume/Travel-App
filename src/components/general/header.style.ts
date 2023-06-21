import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.SIZES.padding,
  },
  backButtonContainer: {
    alignItems: 'flex-start',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: theme.COLORS.transparentBlack,
  },
  backArrow: {
    width: 20,
    height: 20,
    tintColor: theme.COLORS.white,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.h3,
    lineHeight: 22,
  },
  rightContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundColor: {
    backgroundColor: theme.COLORS.transparentBlack,
  },
  rightButton: {
    width: 20,
    height: 20,
    tintColor: theme.COLORS.white,
  },
});

export default styles;
