import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// we need to somehow seed the database

// we need config here
const config = {
  apiKey: 'AIzaSyCPV7SRc1CIGKSEwajnmRSOWyuvAMdO9q8',
  authDomain: 'netflix-type-project.firebaseapp.com',
  databaseURL: 'https://netflix-type-project.firebaseio.com',
  projectId: 'netflix-type-project',
  storageBucket: 'netflix-type-project.appspot.com',
  messagingSenderId: '28170880037',
  appId: '1:28170880037:web:982e876333be80e9406bcc',
}

const firebase = Firebase.initializeApp(config)

export { firebase }
