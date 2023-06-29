import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './welcome.styles';
import {ButtonType, CustomButton} from '../../components';
import {icons} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {RootState} from '../../redux/store';
import {getFirestoreData} from '../../utils/helpers/firebase';
import {setUser} from '../../redux/auth/slices/auth.slice';

type Props = {
  navigation: any;
};

const Welcome: React.FC<Props> = ({navigation}) => {
  const {userId, user} = useAppSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getFirestoreData('user', [], userId);
        dispatch(setUser(response?._data));
        navigation.navigate('Main');
      } catch (error) {
        console.log('error getting user: ', error);
      }
    };
    if (user && userId) {
      navigation.navigate('Main');
    } else if (userId) {
      getUser();
    }
  }, [dispatch, navigation, user, userId]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image source={icons.logo_tag_white} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>
          Welcome to <Text style={styles.appName}>FINE WAKA</Text>
        </Text>
        <Text style={styles.tag}>
          Get the best out of your travel experience with us
        </Text>
        <CustomButton
          btnText="Register now"
          onPress={() => navigation.navigate('Signup')}
        />
        <CustomButton
          btnText="Login"
          btnType={ButtonType.SECONDARY}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
