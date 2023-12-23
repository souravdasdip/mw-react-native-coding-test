import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withModal } from '../hoc/withModal';
import { useTaskContext } from '../store/TaskContext';

const Card = ({ card, openModal }) => {
  const { removeById } = useTaskContext()
  return (
    <TouchableOpacity onPress={() => openModal(card)} style={styles.container}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
      <Pressable onPress={() => removeById(card.id)} style={styles.remove}>
        <Text>❌</Text>
      </Pressable>
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
  },
  remove: {
    position: 'absolute',
    right: 15,
    top: 17
  }
});

export default withModal(Card);
