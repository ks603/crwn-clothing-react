import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAAKngYyPWqQWgpvTt1lgY3luSA9iv_SQQ",
  authDomain: "thread-react.firebaseapp.com",
  databaseURL: "https://thread-react.firebaseio.com",
  projectId: "thread-react",
  storageBucket: "thread-react.appspot.com",
  messagingSenderId: "256461229134",
  appId: "1:256461229134:web:a02e8b5f262af12c84c71f",
  measurementId: "G-6RCP0B6GXG"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase