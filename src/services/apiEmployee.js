// import axios from "axios";
// import toast from "react-hot-toast";
// const BASE_URL = "https://crud-backend-m.vercel.app/v1/employees";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmRhYzA0NmU3YTMwZTk1MzZjMzYzY2IiLCJpYXQiOjE3MjU5NjI3ODksImV4cCI6MTcyODU1NDc4OSwidHlwZSI6InJlZnJlc2gifQ.6HT-HsvyLqw3MS5GQd9344fEU58KbPQ7uT32RA3xJzw";
// export async function getEmployee() {
//   const res = await axios.get(`${BASE_URL}/getEmployees`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (res.status === 200) {
//     setEmployeeData(res.data.data.results);
//   }
// }
// export const deleteEmployee = async (id) => {
//   const res = await axios.get(`${BASE_URL}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (res.status === 200) {
//     setEmployeeData(employeeData.filter((employee) => id !== employee.id));
//     toast.success("employee deleted successfully");
//   }
// };
