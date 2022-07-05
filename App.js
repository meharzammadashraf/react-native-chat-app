import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home/home';
import Signup from './components/signin/signup';
import Mainpage from './components/mainpage/mainpage';
import Login from './components/login/login';
import Msgpage from './components/msgpage/msgpage';
import IndividualChat from './components/msgpage/individualChat';
import Prac from './components/prac/prac';
import Prac1 from './components/prac/prac1';
import HomeScreen from './components/prac/prac1';
import ProfileScreen from './components/prac/prac';
import MyTabs from './components/navigationTop/navigationTop';
import Styling from './components/styleing/styling';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//   const Stack = createStackNavigator();
//   const Tab = createBottomTabNavigator();
// function App() {
//   return (
//     <>
//     <NavigationContainer>
//       <Stack.Navigator 
//       // screenOptions={{ headerShown: false }}
//       >
//         {/* <Stack.Screen  options={{headerShown: false}} name="Styling" component={Styling} /> */}
//         <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen  name="Mainpage" component={Mainpage} />
//         <Stack.Screen name="Msgpage" component={Msgpage} />
//         <Stack.Screen name="IndividualChat" component={IndividualChat} 
//         options={({ route }) => ({ title: route.params.name })}
//         />
//         {/* <Stack.Screen name="Prac" component={Prac} />
//         {/* <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'My home' }}
//           />
//           <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={({ route }) => ({ title: route.params.name })}
//         /> */}
//       </Stack.Navigator>
//     <Tab.Navigator>
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Signup" component={Signup} />
//   </Tab.Navigator>
//     </NavigationContainer>
//   </>
//   );
// }

// export default App;









import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Topwalanavigation = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Mainpage" component={Mainpage} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Topwalanavigation.Navigator>
        <Topwalanavigation.Screen options={{headerShown: false}} name="HomeTabs" component={HomeTabs} />
        <Topwalanavigation.Screen name="Home" component={Home} />
      </Topwalanavigation.Navigator>
    </NavigationContainer>
  );
}