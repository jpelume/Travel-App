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

type Props = {
  navigation: any;
};

export const isValidEmail = (email: string) => {
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  return regex.test(email);
};

const Signup: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
        <Input
          leftIcon={IconName.LOCK}
          leftIconType={IconType.ANT_DESIGN}
          placeholder="Confirm password"
          onChange={setConfirmPassword}
          onPress={() => setShowPassword(!showPassword)}
          inputType={showPassword ? InputType.TEXT : InputType.PASSWORD}
          rightIcon={showPassword ? IconName.EYE_OFF : IconName.EYE}
          rightIconType={IconType.FEATHER}
          isValid={password === confirmPassword || confirmPassword.length === 0}
          error={'Passwords do not match'}
        />

        <View style={styles.buttonsContainer}>
          <CustomButton
            btnText="Signup"
            disabled={!(email && password && password === confirmPassword)}
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <View style={styles.spacing} />
          <SocialButton
            type={SocialButtonType.FACEBOOK}
            btnText="Signup with Facebook"
            onPress={() => {}}
          />
          <View style={styles.spacing} />
          <SocialButton
            type={SocialButtonType.GOOGLE}
            btnText="Signup with Google"
            onPress={() => {}}
          />
          <View style={styles.spacing} />
          <CustomButton
            btnText="Already have an account? Login"
            btnType={ButtonType.TEXT}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
