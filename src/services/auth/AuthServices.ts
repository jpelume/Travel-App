import {AuthApis} from '../../api/AuthApis';
import auth from '@react-native-firebase/auth';
import {LoginType} from '../types/auth/AuthType';

export default class AuthServices {
  public async loginService(data: LoginType) {
    const response = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    console.log('response from sign up: ', response);
    return response;
  }
  public async singnupService(data: LoginType) {
    const response = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    console.log('response from login: ', response);
    return response;
  }
  public async updateProfileService(data: any) {
    const response = await firebase
      .auth()
      .updateProfile(AuthApis.updateProfile, data);
    return response?.data;
  }
}
