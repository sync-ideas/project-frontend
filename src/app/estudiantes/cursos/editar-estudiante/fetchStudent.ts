import { useLoginStore } from "@store/index";

export const getStudent = async (id:string) => {
  const accessToken = useLoginStore.getState().token;
    const response = await fetch(`https://attendance-control.vercel.app/api/students?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required, such as authorization
        'Authorization': 'Bearer ' + accessToken,
      }})
      
      const data = await response.json()
    return data
}