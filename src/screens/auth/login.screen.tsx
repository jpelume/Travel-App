import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
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

type Props = {
  navigation: any;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.title}>Travel app</Text>
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
            onPress={() => navigation.navigate('Main')}
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
