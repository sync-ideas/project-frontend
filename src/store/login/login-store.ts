"use client";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface State {
  isLogging: boolean;
  token: string;
  userData: any; // Puedes definir una interfaz más específica para el tipo de datos del usuario
  loggedIn: () => void;
  notLoggedIn: () => void;
  setToken: (token: string) => void;
  setUserData: (data: any) => void;
}

export const useLoginStore = create<State>()(
  persist(
    (set) => ({
      isLogging: false,
      token: '',
      userData: null,
      loggedIn: () => set({ isLogging: true }),
      notLoggedIn: () => set({ isLogging: false }),
      setToken: (token) => set({ token }),
      setUserData: (data) => set({ userData: data }),
    }),
    {
      name: 'login-storage', // Nombre para el almacenamiento en localStorage
      storage: createJSONStorage(() => localStorage)
    }
  )
);