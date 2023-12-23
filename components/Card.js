import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withModal } from '../hoc/withModal';

const Card = ({ card, openModal }) => {
  return (
    <TouchableOpacity onPress={() => openModal(card)} style={styles.container}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    width: '100%'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 12
  }
});

export default withModal(Card);
