import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './signup.styles';
import {
  ButtonType,
  CustomButton,
  IconName,
  IconType,
  Input,
  InputType,
  SocialButton,
  SocialButtonType,
} from '../../components';
import {isValidEmail} from './signup.screen';
import {icons} from '../../utils';
import {RootState} from '../../redux/store';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {LoginType} from '../../services/types/auth/AuthType';
import {login} from '../../redux/auth/thunk/auth.thunk';

type Props = {
  navigation: any;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {isLoginSuccess, isLoginError, isLoginLoading, loginMessage} =
    useAppSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoginSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Login successful!!',
      });
      navigation.navigate('Main');
    } else if (isLoginError && loginMessage) {
      Toast.show({
        type: 'error',
        text1: loginMessage,
      });
    }
  }, [isLoginError, isLoginSuccess, loginMessage, navigation]);

  const handleLogin = () => {
    const data: LoginType = {
      email,
      password,
    };
    dispatch(login(data));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={icons.logo_tag_black} style={styles.logo} />
        <Text style={styles.title}>Fine Waka</Text>
      </View>
      <View style={styles.container}>
        <Input
          leftIcon={IconName.USER}
          leftIconType={IconType.ANT_DESIGN}
          placeholder="Email"
          onChange={setEmail}
          inputType={InputType.EMAIL}
          isValid={isValidEmail(email) || email.length === 0}
          error={'Invalid email!'}
        />
        <Input
          leftIcon={IconName.LOCK}
          leftIconType={IconType.ANT_DESIGN}
          placeholder="Password"
          onChange={setPassword}
          rightIcon={showPassword ? IconName.EYE_OFF : IconName.EYE}
          onPress={() => setShowPassword(!showPassword)}
          inputType={showPassword ? InputType.TEXT : InputType.PASSWORD}
          rightIconType={IconType.FEATHER}
          isValid={password.length > 5 || password.length === 0}
          error={'Password must be graeater than 5 characters'}
        />
        <View style={styles.buttonsContainer}>
          <CustomButton
            btnText="Login"
            disabled={!(email && password)}
            loading={isLoginLoading}
            onPress={handleLogin}
          />
          <View style={styles.spacing} />
          <SocialButton
            type={SocialButtonType.FACEBOOK}
            btnText="Login with Facebook"
            onPress={() => {}}
          />
          <View style={styles.spacing} />
          <SocialButton
            type={SocialButtonType.GOOGLE}
            btnText="Login with Google"
            onPress={() => {}}
          />
          <View style={styles.spacing} />
          <CustomButton
            btnText="New to travel app? Signup"
            btnType={ButtonType.TEXT}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
