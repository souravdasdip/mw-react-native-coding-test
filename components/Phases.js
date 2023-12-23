import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTaskContext } from '../store/TaskContext';
import Button from './Button';
import Phase from './Phase';

const Phases = () => {
    const { phases, addPhase } = useTaskContext()

    const [phase_view, setphase_view] = useState(false)
    const [phase_name, setphase_name] = useState('')

    const onAddPhase = () => {
        addPhase(phase_name)
        setphase_view(false)
    }

    return (
        <ScrollView horizontal style={styles.container}>
            {phases.map(phase => <Phase key={phase.id} phase={phase} />)}
            <Button onPress={() => setphase_view(prev => !prev)} title={'+ Add phase'} />

            {phase_view &&
                <Modal visible={phase_view}
                    transparent={false}
                    animationType="slide"
                    onRequestClose={() => setphase_view(false)} style={styles.add_phase_view}>
                    <View style={{ padding: 20 }}>
                        <Text>Add Phase</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Add phase...'
                            onChangeText={setphase_name}
                            value={phase_name}
                            placeholderTextColor={'grey'}
                        />

                        <Button title={"Add Phase"} onPress={onAddPhase} />
                    </View>
                </Modal>
            }
        </ScrollView>
    )
}

export default Phases

const styles = StyleSheet.create({
    container: {
        margin: 5,
        gap: 10,
        marginRight: 16,
    },
    input: {
        fontSize: 16,
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5
    },
})