import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTaskContext } from '../store/TaskContext';

export const withModal = (WrappedComponent) => {
    return function WithModal(props) {
        const [modalVisible, setModalVisible] = useState(false);

        const [task, setTask] = useState({
            title: '',
            description: ''
        });

        const { updateCardById } = useTaskContext()

        const openModal = (card) => {
            setTask(card);
            setModalVisible(true);
        };

        const closeModal = () => {
            setModalVisible(false);
        };


        const onSubmit = () => {
            updateCardById(task?.id, task.title, task.description);
            closeModal()
        }

        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <WrappedComponent {...props} openModal={openModal} />
                <Modal
                    visible={modalVisible}
                    transparent={false}
                    animationType="slide"
                    onRequestClose={closeModal}
                >
                    <View style={styles.container}>

                        <Text style={styles.headline}>Create/Edit</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Title...'
                            onChangeText={(text) => setTask(prev => { return { ...prev, title: text } })}
                            value={task.title}
                            placeholderTextColor={'grey'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Description...'
                            onChangeText={(text) => setTask(prev => { return { ...prev, description: text } })}
                            value={task.description}
                            placeholderTextColor={'grey'}
                        />

                        <Text></Text>
                        <Button title='Submit' onPress={onSubmit} />
                        <Text></Text>
                        <Button title='Close' color={"black"} onPress={closeModal} />
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    headline: {
        marginBottom: 15,
        fontSize: 26,
        fontWeight: 'bold'
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
    }
})