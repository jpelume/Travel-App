import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
    padding: 10,
  },
  heading: {
    fontSize: theme.SIZES.h1,
    fontWeight: '500',
    color: theme.COLORS.black,
    margin: 10,
  },
  travelInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.COLORS.lightGray,
    borderRadius: theme.SIZES.radius,
    padding: 12,
    marginVertical: 12,
  },
});

export default styles;
