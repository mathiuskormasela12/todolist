// ========== Firebase
// import all packages
import firestore from '@react-native-firebase/firestore';

export const tasksCollection = firestore().collection('tasks');
