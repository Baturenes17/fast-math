import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Box } from './src/Box';
import { useState,useEffect } from 'react';
import { MyContext } from './src/Mycontext';

export default function App() {
  const [score, setScore] = useState(0);
  
  return (
    <MyContext.Provider value={{ score, setScore }} >
      <View style={[styles.container, { backgroundColor: score % 50 === 0 && score != 0 && score > 0 ? "#45FF45" : "#fff" }]}>
        <Text style={styles.score} >{score}</Text>
        <Box />
      </View>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 10
  }
});
