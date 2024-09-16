"use client"
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Profesor {
  id: number;
  createdAt: string;
  fullname: string;
  email: string;
  role: string;
}
interface newUser {
  username: string;
  fullname: string;
  email: string;
  password: string;
}

interface State {
    profesores: Profesor[];
    newUser: newUser[];
    setProfesores: (profesores: Profesor[]) => void;
    setNewUser: (newUser: newUser[]) => void;
    resetNewUser: () => void;
}
export const useProfesoresStore = create<State>()(
    persist(
        (set) => ({
          profesores: [],
          newUser:[],
          setProfesores: (profesores) => set({ profesores }),
          setNewUser: (newUser) => set({ newUser}),
          resetNewUser: () => set({ newUser: [] })
        }),
        {
          name: 'profesores-storage', // Nombre para el almacenamiento persistente
          storage: createJSONStorage(() => localStorage),
        }
      )
    );
