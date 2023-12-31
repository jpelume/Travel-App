import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: theme.SIZES.padding,
  },
  logoContainer: {
    rowGap: 64,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: theme.COLORS.PRIMARY_TEXT,
    textAlign: 'center',
  },
  container: {},
  buttonsContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  spacing: {
    marginVertical: 18,
  },
});

export default styles;
