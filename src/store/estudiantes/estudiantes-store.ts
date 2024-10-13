"use client"
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Course {
  id: number;
  level: string;
  number: string;
  letter: string;
  createdAt: string;
}
interface newCourse {
  username: string;
  fullname: string;
  email: string;
  password: string;
}

interface State {
    courses: Course[];
    newCourse: newCourse[];
    setCourses: (courses: Course[]) => void;
    setNewCourse: (newCourse: newCourse[]) => void;
    resetNewCourse: () => void;
}
export const useEstudiantesStore = create<State>()(
    persist(
        (set) => ({
          courses: [],
          newCourse:[],
          setCourses: (courses) => set({ courses }),
          setNewCourse: (newCourse) => set({ newCourse}),
          resetNewCourse: () => set({ newCourse: [] })
        }),
        {
          name: 'estudiantes-storage', // Nombre para el almacenamiento persistente
          storage: createJSONStorage(() => localStorage),
        }
      )
    );
