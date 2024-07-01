"use client";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface State {
    userId: number;
    email: string;
    fullname: string;
    username: string;
    role: string;
    setUserId: (userId: number) => void;
    setEmail: (email: string) => void;
    setFullname: (fullname: string) => void;
    setUsername: (username: string) => void;
    setRole: (role: string) => void; 
    resetUser: () => void; 
}

export const useUserStore = create<State>()(
    persist(
        (set) => ({
            userId: 0,
            email: '',
            fullname: '',
            username: '',
            role: '',
            setUserId: (userId) => set({ userId }),
            setEmail: (email) => set({ email }),
            setFullname: (fullname) => set({ fullname }),
            setUsername: (username) => set({ username }),
            setRole: (role) => set({ role }),
            resetUser: () => set({
                userId: 0,
                email: '',
                fullname: '',
                username: '',
                role: '',
            }),
        }),
        {
            name: 'user-storage', // Nombre para el almacenamiento en localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);