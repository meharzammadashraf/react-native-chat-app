import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Text } from "react-native"
import React, {useState, useEffect} from 'react'
import { Button,  TextInput } from "react-native-paper";
import app from '../firebase/firebase'
import { collection, getFirestore, addDoc, setDoc, doc } from "firebase/firestore";

function Signup(props) {
  const auth = getAuth()
    const db = getFirestore(app)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
    const a = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        sendmsg()
        console.log("signed in");
        props.navigation.navigate("Login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    }
    const sendmsg = async ()=>{
      try {
          let res = await setDoc(doc(db, "users", email),{
              email: email,
              password: password
          })
      } catch (error) {
          console.log(error);
      }
  }
    return(
        <>
         <TextInput label="Email" value={email} onChangeText={a => setEmail(a)}/>
         <TextInput label="Password" value={password} onChangeText={a => setPassword(a)}/>
            <Button onPress={a}>Sign up</Button>
        </>
    )
}
export default Signup



