import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Button, Text, Avatar } from 'react-native-paper';
import { Emitter } from 'react-native-particles';
// import ParticleField from 'react-native-particles-webgl/src/ParticleField';

import ParticleField from "react-particles-webgl";


// const config = {
//     showCube: false,
//     dimension: "3D",
//     velocity: 2,
//     boundaryType: "passthru",
//     antialias: false,
//     direction: {
//       xMin: -0.6,
//       xMax: 0.3,
//       yMin: -1,
//       yMax: -0.6,
//       zMin: -0.6,
//       zMax: 0.3
//     },
//     lines: {
//       colorMode: "rainbow",
//       color: "#351CCB",
//       transparency: 0.9,
//       limitConnections: true,
//       maxConnections: 20,
//       minDistance: 150,
//       visible: false
//     },
//     particles: {
//       colorMode: "solid",
//       color: "#ffffff",
//       transparency: 0.9,
//       shape: "circle",
//       boundingBox: "canvas",
//       count: 2500,
//       minSize: 1,
//       maxSize: 25,
//       visible: true
//     },
//     cameraControls: {
//       enabled: true,
//       enableDamping: true,
//       dampingFactor: 0.2,
//       enableZoom: true,
//       autoRotate: false,
//       autoRotateSpeed: 0.3,
//       resetCameraFlag: true
//     }
//   };
function Home(props) {
    return(
        <View style={styles.page}>
            <ImageBackground source={{uri: "https://cdn1.vectorstock.com/i/thumb-large/41/15/different-network-app-icons-seamless-background-vector-21434115.jpg"}} resizeMode="cover" style={styles.image}>
                <Button style={styles.button} 
                // icon={{ uri: 'https://previews.123rf.com/images/tvectoricons/tvectoricons1808/tvectoricons180807789/107679826-login-vector-icon-isolated-on-transparent-background-login-logo-concept.jpg' }}
                mode="contained" onPress={() => props.navigation.navigate("Login")}><Text style={styles.btnText}>Login</Text></Button>
                <TouchableOpacity style={styles.signupTouchableopacity} onPress={() => props.navigation.navigate("Signup")}>
                    <Text style={styles.signupText}>If you are new user then you must create your account here. Sign Up</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <Emitter
        numberOfParticles={50}
        emissionRate={5}
        interval={200}
        particleLife={1000}
        direction={-90}
        spread={360}
        fromPosition={{ x: 200, y: 200 }}
        autoStart= {true}
        infiniteLoop= {true}
      >
        <Text style={{color:"white"}}>Pbbbbbbbb</Text>
      </Emitter>
      {/* <ParticleField config={config} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    page:{
        // marginTop: 60,
        flex: 1
    },
    button:{
        backgroundColor: "#a69803",
    },
    btnText:{
        color: '#6e6d69',
        fontSize: 15
    },
    image:{
        flex: 1,
    justifyContent: "center"
    },
    signup:{
        backgroundColor: "transparent"
    },
    signupTouchableopacity:{
        flexDirection: "row"
    },
    signupText:{
        color: "red"
    }
})
export default Home;