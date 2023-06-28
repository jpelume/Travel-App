import {AuthApis} from '../../api/AuthApis';
import auth from '@react-native-firebase/auth';
import {LoginType} from '../types/auth/AuthType';
import {
  getFirestoreData,
  setFirestoreData,
  updateFirestoreData,
} from '../../utils/helpers/firebase';

export default class AuthServices {
  public async loginService(data: LoginType) {
    const response = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    return {
      user: {
        email: response?.user?.email,
        name: response?.user?.displayName,
        phoneNumer: response?.user?.phoneNumber,
        photoURL: response?.user?.photoURL,
      },
      userId: response?.user?.uid,
    };
  }
  public async signupService(data: LoginType) {
    const response = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    await updateFirestoreData(
      'users',
      {
        email: response?.user?.email,
        name: response?.user?.displayName,
        phoneNumer: response?.user?.phoneNumber,
        photoURL: response?.user?.photoURL,
      },
      response?.user?.uid,
    );
    return {
      user: {
        email: response?.user?.email,
        name: response?.user?.displayName,
        phoneNumer: response?.user?.phoneNumber,
        photoURL: response?.user?.photoURL,
      },
      userId: response?.user?.uid,
    };
  }
  public async updateProfileService(data: any) {
    await updateFirestoreData('users', data.data, data.id);
    const response = await getFirestoreData('users', [], data.id);
    console.log('updated user: ', response);
    return response;
  }
}
