import { useLoginStore } from "@store/index";

interface getStudentsParams {
  courseId: number
}

async function getStudentsByCourse(courseId:number): Promise<any> {
  const accessToken = useLoginStore.getState().token;

  try {
    const response = await fetch(`https://project-backend-v2.vercel.app/api_v2/students/course/${courseId.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required, such as authorization
        'Authorization': 'Bearer ' + accessToken,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching students by course:', error);
    throw error;
  }
}

export default getStudentsByCourse