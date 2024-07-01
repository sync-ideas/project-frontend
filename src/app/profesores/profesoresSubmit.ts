"use client"
import axios from 'axios';
import { useLoginStore } from '../../store';

interface Profesor {
  id: number;
  createdAt: string;
  fullname: string;
  email: string;
  role: string;
}

export const obtenerProfesores = async (): Promise<Profesor[]> => {
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
    // console.log('Lista de profesores:', response.data.users);
    return response.data.users;
  } catch (error: any) {
    console.error('Error al obtener los profesores:', error.message);
    throw error;
  }
};