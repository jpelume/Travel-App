import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './signup.styles';
import {CustomButton, DropDown, Input} from '../../components';
import {genders, userTypes} from '../../utils/constants';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {RootState} from '../../redux/store';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {UpdateProfileType} from '../../services/types/auth/AuthType';
import {updateProfile} from '../../redux/auth/thunk/auth.thunk';

type Props = {
  navigation: any;
};

export const isValidEmail = (email: string) => {
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  return regex.test(email);
};

const UpdateProfile: React.FC<Props> = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [userType, setUserType] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const {
    userId,
    isUpdateError,
    isUpdateLoading,
    isUpdateSuccess,
    updateMessage,
  } = useAppSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUpdateSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Sign up successful!!',
      });
      navigation.navigate('Main');
    } else if (isUpdateError && updateMessage) {
      Toast.show({
        type: 'error',
        text1: updateMessage,
      });
    }
  }, [isUpdateError, isUpdateSuccess, navigation, updateMessage]);

  useEffect(() => {
    if (isUpdateSuccess) {
      navigation.navigate('Main');
    }
  }, [isUpdateSuccess, navigation]);

  const handleUpdateProfile = () => {
    const data: UpdateProfileType = {
      data: {
        name: fullname,
        gender,
        userType,
        weight,
        height,
      },
      id: userId,
    };
    dispatch(updateProfile(data));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.title}>Travel app</Text>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Input placeholder="Full name" onChange={setFullname} />
        <DropDown
          placeholder="Gender"
          data={genders}
          setSelectedItem={setGender}
        />
        <DropDown
          placeholder="User type"
          data={userTypes}
          setSelectedItem={setUserType}
        />
        <Input placeholder="Weight" onChange={setWeight} rightAddOn="kg" />
        <Input placeholder="Height" onChange={setHeight} rightAddOn="cm" />
        <View style={styles.buttonsContainer}>
          <CustomButton
            btnText="Update profile"
            disabled={false}
            loading={isUpdateLoading}
            onPress={handleUpdateProfile}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;
