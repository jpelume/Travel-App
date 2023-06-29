import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

export const getFirestoreData = async (
  collection: string,
  params: any,
  docId?: string,
) => {
  try {
    let query: any;
    let result: any;
    query = firestore().collection(collection);

    if (docId) {
      result = query!.doc(docId).get();
    } else {
      if (params && params.length > 0) {
        params.forEach((item: any) => {
          query = query.where(item.key, item.compare, item.value);
        });
      }

      result = await query!.get();
    }

    return result;
  } catch (error) {
    console.log('Error getting data: ', error);
  }
};

export const setFirestoreData = async (
  collection: string,
  data: any,
  id?: string,
) => {
  try {
    return id
      ? await firestore().collection(collection).doc(id).set(data)
      : await firestore().collection(collection).add(data);
  } catch (error) {
    console.log('Error setting data: ', error);
  }
};

export const updateFirestoreData = async (
  collection: string,
  data: any,
  docId: string,
) => {
  try {
    return await firestore().collection(collection).doc(docId).update(data);
  } catch (error) {
    console.log('Error updating data: ', error);
  }
};

export const deleteFirestoreData = async (
  collection: string,
  docId: string,
) => {
  try {
    return await firestore().collection(collection).doc(docId).delete();
  } catch (error) {
    console.log('Error deleting data: ', error);
  }
};
