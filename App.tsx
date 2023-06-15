import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icon1 = () => {
  return (
    <Icon name="facebook" size={30} color="#000000" />
  )
};

const ButtonIcon1 = () => {
  return (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
    // onPress={this.loginWithFacebook}
    >
      Login with Facebook
    </Icon.Button >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  view1: {
    flexDirection: 'row', 
    marginLeft: 50,
    paddingBottom: 15
  },
  text1: {
    color: '#000', 
    fontSize: 20, 
    marginRight: 80, 
    
  },
  text2: {
    color: '#000', 
    fontSize: 20, 
    marginRight: 10, 
  },
});

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Icon: </Text>
        <Icon1 />
      </View>
      <View style={styles.view1}>
        <Text style={styles.text2}>Icon.Button : </Text>
        <ButtonIcon1 />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="React Native Icons" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
