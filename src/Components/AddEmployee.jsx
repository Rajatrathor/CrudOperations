import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import toast from "react-hot-toast";
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PopupContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const BASE_URL = "https://crud-backend-m.vercel.app/v1/employees";

function AddEmployee({ setOpenPopup, addNewEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfJoining: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmRhYzA0NmU3YTMwZTk1MzZjMzYzY2IiLCJpYXQiOjE3MjU5NjI3ODksImV4cCI6MTcyODU1NDc4OSwidHlwZSI6InJlZnJlc2gifQ.6HT-HsvyLqw3MS5GQd9344fEU58KbPQ7uT32RA3xJzw";
    try {
      const res = await axios.post(`${BASE_URL}/add`, employee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success("Employee Added Successfully");
         setOpenPopup(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Overlay>
      <PopupContent>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            className="p-2"
            name="name"
            value={employee.name}
            onChange={(e) =>
              setEmployee({ ...employee, [e.target.name]: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Enter email"
            className="p-2"
            name="email"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter phone Number"
            name="phoneNumber"
            className="p-2"
            value={employee.phoneNumber}
            onChange={(e) =>
              setEmployee({ ...employee, [e.target.name]: e.target.value })
            }
          />
          <input
            type="date"
            placeholder="Enter Date"
            name="dateOfJoining"
            className="p-2"
            value={employee.dateOfJoining}
            onChange={(e) =>
              setEmployee({ ...employee, [e.target.name]: e.target.value })
            }
          />
          <div className="mt-2">
            <button type="submit" className="bg-yellow-300 rounded-md p-2">
              Add Employee
            </button>
            <button
              className="bg-red-400 rounded-md p-2 ml-3"
              onClick={() => setOpenPopup(false)}
            >
              Close
            </button>
          </div>
        </form>
      </PopupContent>
    </Overlay>
  );
}
export default AddEmployee;
