import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Button({ title, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}> {title} </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'black',
    width: '100%',
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Button