import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTaskContext } from '../store/TaskContext';
import Button from './Button';
import Phase from './Phase';

const Phases = () => {
    const { phases } = useTaskContext()

    return (
        <ScrollView horizontal style={styles.container}>
            {phases.map(phase => <Phase key={phase.id} phase={phase} />)}
            <Button title={'+ Add phase'} />
        </ScrollView>
    )
}

export default Phases

const styles = StyleSheet.create({
    container: {
        margin: 5,
        gap: 10,
        marginRight: 16
    },
})