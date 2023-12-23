import { createContext, useContext, useState } from "react";
import phasesData from '../data/phases.json';

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({ children }) => {
    const [phases, setPhases] = useState(phasesData);


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

    const value = {
        phases,
        updateCardById
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}