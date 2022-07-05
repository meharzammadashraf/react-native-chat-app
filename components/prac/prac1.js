import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Text, Button } from 'react-native';

function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() =>
            props.navigation.navigate('Profile', { name: 'Custom profile header' })
          }
        />
      </View>
    );
  }
  export default HomeScreen;
