"use client";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface State {
    userId: number;
    level: string;
    number: string;
    letter: string;
    setUserId: (userId: number) => void;
    setLevel: (level: string) => void; // Corregido el nombre de la función
    setNumber: (number: string) => void; // Corregido el nombre de la función
    setLetter: (letter: string) => void; // Corregido el nombre de la función
    resetUser: () => void; 
}

export const useCourseStore = create<State>()(
    persist(
        (set) => ({
          userId: 0, // Agregado el estado userId
          level: "", // Inicializa el estado
          number: "", // Inicializa el estado
          letter: "", // Inicializa el estado
          setUserId: (userId) => set({ userId }),
          setLevel: (level) => set({ level }), // Método para establecer el nivel
          setNumber: (number) => set({ number }), // Método para establecer el número
          setLetter: (letter) => set({ letter }), // Método para establecer la letra
            resetUser: () => set({
                userId: 0,
                level: '',
                number: '',
                letter: '',
            }),
        }),
        {
            name: 'course-storage', // Nombre para el almacenamiento en localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);