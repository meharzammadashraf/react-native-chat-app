import { Text, TextInput, IconButton, Colors } from "react-native-paper"
import React, {useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, View, FlatList} from 'react-native'
import { getAuth } from "firebase/auth"
import { collection, getDoc, getDocs, getFirestore, query, where, addDoc, onSnapshot } from "firebase/firestore";
import app from "../firebase/firebase";
function Msgpage(props) {
    const auth = getAuth()
    const db = getFirestore(app)
    const [msg, setMsg] = useState("")
    const [data, setData] = useState("")

useEffect(()=>{
    
    const onSubmitNewMsg = onSnapshot(collection(db, 'Chat'), (docs)=>{
        try {
        let msgs = [];
        docs.docs.forEach((doc)=>{
            console.log(doc.data());
            msgs.push(doc.data())
        })
        setData(msgs)
        console.log("dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",data);
       } catch (error) {
        console.log(error);
       }
    })
},[])
    const sendmsg = async ()=>{
        try {
            let res = await addDoc(collection(db, "Chat"),{
                msg: msg,
                msgFrom: auth.currentUser.email
            })
            setMsg("")
        } catch (error) {
            console.log(error);
        }
    }
    const renderItem = ({item})=>{
        return(
            auth.currentUser.email == item.msgFrom?
            <View style={styles.sameEmail}>
                <Text>You:</Text>
                <Text>{item.msg}</Text>
            </View>
            :
        <View style={styles.otherEmail}>
            <Text>{item.msgFrom} :</Text>
            <Text>{item.msg}</Text>
        </View>
        
        
        )
    }
    return(
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index)=> item.id}
             />
            <View style={{flexDirection: "row", bottom: 0, position: "absolute"}}>
                <TextInput style={styles.textinput} placeholder="type here" value={msg} onChangeText={a => setMsg(a)}/>
                <IconButton icon="send" color={Colors.blue500} size={20} onPress={sendmsg} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    textinput:{
        margin: 5,
        borderWidth: 1,
        width: "87%",
        height: 35
    },
    sameEmail:{
        backgroundColor: '#45FFAC',
        width: "45%",
        alignSelf: "flex-end",
        margin: 3,
        padding: 5,
        borderRadius: 5
    },
    otherEmail: {
        backgroundColor: '#B5FCDC',
        width: "45%",
        alignSelf: "flex-start",
        margin: 3,
        padding: 5,
        borderRadius: 5
    }


})
export default Msgpage
