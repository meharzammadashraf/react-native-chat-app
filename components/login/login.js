import { Text, TextInput, Button } from "react-native-paper";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase'
import {
    StyleSheet, ImageBackground
} from "react-native";

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const auth = getAuth(app);
    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setEmail("")
                setPassword("")
                console.log(auth.currentUser.email)
                alert("Login successfully")
                props.navigation.navigate("Mainpage")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <>
            <ImageBackground source={{ uri: "https://cdn1.vectorstock.com/i/thumb-large/41/15/different-network-app-icons-seamless-background-vector-21434115.jpg" }} resizeMode="cover" style={styles.image}>
                <TextInput style={styles.textinput} label="Email" value={email} onChangeText={a => setEmail(a)} />
                <TextInput style={styles.textinput} label="Password" value={password} onChangeText={a => setPassword(a)} secureTextEntry={secureTextEntry} right={<TextInput.Icon name="eye" onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                    return false;
                }} />} />
                <Button style={styles.btn} onPress={login}>Login</Button>
            </ImageBackground>
        </>
    )
}
export default Login;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    textinput:{
        backgroundColor: "#a69803",
        borderColor: "transparent"
    },
    btn:{
        backgroundColor: "#9e9e9b",
        color: 'red'
    }
})