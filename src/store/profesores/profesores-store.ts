"use client"
import { create } from 'zustand';

interface State {
    profesores: any[];
}

export const useProfesoresStore = create<State>((set) => ({
    profesores: [],
}));