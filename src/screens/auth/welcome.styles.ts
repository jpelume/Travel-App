import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: theme.COLORS.LIGTH_DARK,
  },
  topContainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 0.4,
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
  },
  welcomeText: {
    color: 'white',
    fontSize: 48,
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
