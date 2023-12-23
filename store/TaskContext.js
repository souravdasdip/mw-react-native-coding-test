import { createContext, useContext, useState } from "react";
import phasesData from '../data/phases.json';

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({ children }) => {
    const [phases, setPhases] = useState(phasesData);
    const [task_serial, settask_serial] = useState(5)

    const updateCardById = (idToUpdate, newTitle, newDescription) => {
        const updatedData = phases.map(section => {
            if (section.cards) {
                const updatedCards = section.cards.map(card => {
                    if (card.id === idToUpdate) {
                        return {
                            ...card,
                            title: newTitle,
                            description: newDescription
                        };
                    }
                    return card;
                });
                return { ...section, cards: updatedCards };
            }
            return section;
        });
        setPhases(updatedData);
    };

    const removeById = (idToRemove) => {
        const updatedData = phases.map(section => {
            if (section.cards) {
                const filteredCards = section.cards.filter(card => card.id !== idToRemove);
                return { ...section, cards: filteredCards };
            }
            return section;
        });
        setPhases(updatedData);
        settask_serial(prev => prev - 1)
    };

    const addTask = (sectionId, newTask) => {
        const updatedData = phases.map(section => {
            if (section.id === sectionId && section.cards) {
                const newCards = [...section.cards, newTask];
                return { ...section, cards: newCards };
            } else if (section.id === sectionId && !section.cards) {
                const newCards = [newTask];
                return { ...section, cards: newCards };
            }

            return section;
        });
        setPhases(updatedData);
    };


    const value = {
        phases,
        updateCardById,
        removeById,
        addTask,
        task_serial,
        settask_serial
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}