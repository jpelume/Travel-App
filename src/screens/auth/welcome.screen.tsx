import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './welcome.styles';
import {ButtonType, CustomButton} from '../../components';

type Props = {
  navigation: any;
};

const Welcome: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text>LOGO GOES HERE</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>
          Welcome to <Text style={styles.appName}>Tourist Guide</Text>
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
