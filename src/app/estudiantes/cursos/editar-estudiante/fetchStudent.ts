import { useLoginStore } from "@store/index";

export const getStudent = async (id:string) => {
  const accessToken = useLoginStore.getState().token;
    const response = await fetch(`https://project-backend-v2.vercel.app/api_v2/students/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required, such as authorization
        'Authorization': 'Bearer ' + accessToken,
      }})
      
      const data = await response.json()
      console.log(data.data[0])
    return data.data[0]
}