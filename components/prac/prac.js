import React from 'react'
import { View, Text, Button } from 'react-native';
function ProfileScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile screen</Text>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    );
  }
  export default ProfileScreen