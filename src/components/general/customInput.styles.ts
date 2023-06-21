import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  mainContiainer: {
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    height: 50,
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  inputLeftAddOn: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  inputRightAddOn: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  addOnContainer: {
    backgroundColor: 'grey',
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    width: '15%',
  },
  iconContainer: {
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  leftAddOn: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightAddOn: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  errorText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: theme.COLORS.GOOGLE,
  },
  errorInput: {
    borderColor: theme.COLORS.GOOGLE,
  },
});

export default styles;
