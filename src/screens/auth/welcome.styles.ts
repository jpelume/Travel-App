import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: theme.SIZES.padding,
    backgroundColor: theme.COLORS.LIGTH_DARK,
  },
  topContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 0.5,
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
  },
  welcomeText: {
    color: 'white',
    fontSize: 56,
    fontWeight: '600',
  },
  appName: {
    color: theme.COLORS.PRIMARY_TEXT,
  },
  tag: {
    color: 'white',
    fontSize: 18,
    width: '70%',
  },
});

export default styles;
