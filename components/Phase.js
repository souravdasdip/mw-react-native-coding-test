import React from 'react';
import { Button as RnButton, ScrollView, StyleSheet, Text, View } from 'react-native';
import { withModal } from '../hoc/withModal';
import Button from './Button';
import Card from './Card';

const Phase = ({ phase, openModal }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{phase.title}</Text>
          <RnButton title='...' color={'#fff'} />
        </View>

        <ScrollView>
          {phase.cards?.map(card => <Card key={card.id} card={card} />)}
          <Button onPress={() => openModal({ phase_id: phase.id })} title={'+ Add card'} />
        </ScrollView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  option: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default withModal(Phase);
