import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './signup.styles';
import {CustomButton, DropDown, Input} from '../../components';
import {genders, userTypes} from '../../utils/constants';

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

  console.log(fullname, gender, userType, weight, height);
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
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;
