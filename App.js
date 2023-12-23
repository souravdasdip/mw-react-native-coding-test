import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Phases from './components/Phases';
import { TaskProvider } from './store/TaskContext';

const Stack = createStackNavigator();
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TaskProvider>
        <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage} resizeMode="stretch">
          <Text style={styles.title}>MW - TODO</Text>
          <Phases />
        </ImageBackground>
      </TaskProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 6
  },
  backgroundImage: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
