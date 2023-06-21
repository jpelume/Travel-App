import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.PRIMARY,
    alignItems: 'center',
    paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 14,
  },
  disabled: {
    opacity: 0.5,
  },
  btnText: {
    color: 'white',
    fontSize: theme.SIZES.H3,
    fontWeight: '500',
    textAlign: 'center',
  },
  secondaryWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  spaceRight: {
    marginRight: 10,
  },
  secondaryText: {
    color: 'black',
    fontSize: theme.SIZES.H2,
    fontWeight: '500',
    textAlign: 'center',
  },
  text: {
    color: theme.COLORS.PRIMARY,
    fontSize: theme.SIZES.H3,
  },
  facebookWrapper: {
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.COLORS.FACEBOOK + '30',
    borderRadius: 10,
  },
  facebookText: {
    color: theme.COLORS.FACEBOOK,
    marginRight: 10,
    fontSize: theme.SIZES.H2,
    fontWeight: '500',
  },
  googleText: {
    color: theme.COLORS.GOOGLE,
    marginRight: 10,
    fontSize: theme.SIZES.H2,
    fontWeight: '500',
  },
  googleWrapper: {
    backgroundColor: theme.COLORS.GOOGLE + '30',
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
});

export default styles;
