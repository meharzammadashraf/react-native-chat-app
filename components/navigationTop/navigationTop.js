import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../prac/prac';
import HomeScreen from '../prac/prac1';

const Tab = createBottomTabNavigator();

export default function Apppp() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}