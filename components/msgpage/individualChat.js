import { Text, TextInput, IconButton, Colors } from "react-native-paper"
import React, {useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, View, FlatList} from 'react-native'
import { getAuth } from "firebase/auth"
import { collection, getDoc, getDocs, getFirestore, query, where, addDoc, onSnapshot,  orderBy, desc } from "firebase/firestore";
import app from "../firebase/firebase";
function IndividualChat(props) {
    const auth = getAuth()
    const db = getFirestore(app)
    const [msg, setMsg] = useState("")
    const [data, setData] = useState("")
const {collection : collectionid} = props.route.params
useEffect(async ()=>{
    
    const docRef = collection(db, collectionid)
    const a = query(docRef, orderBy("timeStamp", 'asc'))
    
    const onSubmitNewMsg = onSnapshot(a, (docs)=>{
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
// .........................................................................................................
const getTimeAMPMFormat = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    // appending zero in the start if hours less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  };
  getTimeAMPMFormat(new Date())
//   ..................................................................................................
    const sendmsg = async ()=>{
        try {

            let res = await addDoc(collection(db, collectionid),{
                msg: msg,
                msgFrom: auth.currentUser.email,
                timeStamp: new Date().toString(),
                dateTime: getTimeAMPMFormat(new Date())
                // dateTime: new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true })
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
            <Text style={styles.timeShow}>{item.timeStamp.toString()}</Text>
            </View>
            :
        <View style={styles.otherEmail}>
            <Text>{item.msgFrom} :</Text>
            <Text>{item.msg}</Text>
            <Text  style={styles.timeShow}>{item.dateTime}</Text>
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
        height: 35,
        // overflow: 'hidden'
    },
    sameEmail:{
        backgroundColor: '#bfeef5',
        width: "45%",
        alignSelf: "flex-end",
        margin: 3,
        padding: 5,
        borderRadius: 5
    },
    otherEmail: {
        backgroundColor: '#a6f7ec',
        width: "45%",
        alignSelf: "flex-start",
        margin: 3,
        padding: 5,
        borderRadius: 5
    },
    timeShow:{
        fontSize: 7,
        alignSelf: "flex-end"
    }


})
export default IndividualChat;
