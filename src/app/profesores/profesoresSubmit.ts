import { create } from 'zustand';
import axios from 'axios';
import { useLoginStore } from '@/store';

interface Profesor {
  id: number;
  createdAt: string;
  fullname: string;
  email: string;
  role: string;
}

interface ProfesorState {
  profesores: Profesor[];
  obtenerProfesores: () => void;
}

export const useProfesorStore = create<ProfesorState>((set) => ({
  profesores: [],
  obtenerProfesores: async () => {
    try {
      const accessToken = useLoginStore.getState().token;
      const response = await axios.get(
        'https://attendance-control.vercel.app/api/users',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    //   console.log('Lista de profesores:', response.data.users);
      set({ profesores: response.data.users });
    } catch (error: any) {
      console.error('Error al obtener los profesores:', error.message);
    }
  },
}));