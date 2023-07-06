import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 15,
    padding: 10,
  },
  navContainer: {
    backgroundColor: theme.COLORS.white,
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 13,
    color: theme.COLORS.PRIMARY_TEXT,
    marginVertical: 5,
  },
});

export default styles;
