import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  margin: {
    margin: 7,
  },
  firstContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  secondContainer: {
    flex: 1,
    borderTopColor: theme.COLORS.lightGray,
    borderTopWidth: 1,
  },
  thirdContainer: {
    backgroundColor: theme.COLORS.white,
    overflow: 'hidden',
  },
  fourthContainer: {
    marginTop: 20,
  },
});

export default styles;
