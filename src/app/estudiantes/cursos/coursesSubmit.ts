"use client"
import axios from 'axios';
import { useLoginStore } from '@store/index';

interface Course {
  id: number;
  level: string;
  number: string;
  letter: string;
  createdAt: string;
}

export const getCourses = async (): Promise<Course[]> => {
  try {
    const accessToken = useLoginStore.getState().token;
    const response = await axios.get(
      'https://project-backend-v2.vercel.app/api_v2/courses',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    // console.log('Lista de cursos:', response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error('Error al obtener los profesores:', error.message);
    throw error;
  }
};