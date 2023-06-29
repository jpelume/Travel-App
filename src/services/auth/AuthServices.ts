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
    const userFound = await getFirestoreData('users', [], response?.user?.uid);

    return {
      user: userFound?._data,
      userId: response?.user?.uid,
    };
  }
  public async signupService(data: LoginType) {
    const response = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    await setFirestoreData(
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
    return {
      user: response?._data,
      userId: response?.ref?.id,
    };
  }
}
