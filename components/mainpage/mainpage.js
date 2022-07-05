import { SafeAreaView, Text, TouchableOpacity, Button, FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import { getAuth } from "firebase/auth";
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "../firebase/firebase";

function Mainpage(props) {
    const [jonameaaya, setJonameaaya] = useState("")
    const [loading, setLoading] = useState(false)
    const [emaill, setEmaill] = useState([])
    const [search, setSearch] = useState("")

    const auth = getAuth()
    const db = getFirestore(app);
    var allData;
    const onuserselected = (user)=>{
        if (auth.currentUser.email == user.email) {
            alert("you can't chat with yourself")
        } 
        let emails = [ auth.currentUser.email, user.email]
        console.log(emails.sort());
        let collection = emails[0] + "_" + emails[1]
        props.navigation.navigate("IndividualChat", {collection, name: user.email})
    }
    useEffect(async() => {
        await fetchData()
    }, [])
    const fetchData = async () => {
        allData = collection(db, 'users');
        const querrySnapshot = await getDocs(allData);
        const asd = []
        querrySnapshot.forEach((doc) => {
            setJonameaaya(doc.data().email)
            asd.push(doc.data())
        })
        setEmaill(asd)
        console.log(emaill);
    }
    const searchData = async (a) => {
        
        let abc = []
        const usersRef = collection(db, "users")
        console.log(usersRef);
        // create a query against the collection.
        const q = query(usersRef, where('email', '==', search))
        const querrySnapshot = await getDocs(q)
        querrySnapshot.forEach((doc) => {
            abc.push(doc.data().email)
            // console.log(doc.id, "=>", doc.data());
        })
        setEmaill(abc)
        console.log("abc abc abc..........", abc);
        // console.log(abc);
        
    }
    // useEffect(()=>alert("aaaa"), [search])
    return (
        <SafeAreaView>
                <View>
                    <Searchbar placeholder='search'
                        onChangeText={(t) => {
                            setSearch(t)
                            searchData()
                        }}
                        // onIconPress={async()=>{searchData()}}
                        value={search}
                        autoCapitalize="none"
                        // autoCorrect={false}
                        lightTheme={true}
                        round={true}
                        on
                    />
                    <FlatList
                        data={emaill}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => onuserselected(item)}>
                                    <Text style={styles.nam}>{item.email}</Text>

                                    
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item, index) => { return index.toString() }} />
                    <Button title="load data" onPress={fetchData} />
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    nam: {
        fontSize: 20,
        backgroundColor: 'red',
        margin: 10
    },
    map:{
        height: 300,
        width: "100%"
    }
})
export default Mainpage;