import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmRhYzA0NmU3YTMwZTk1MzZjMzYzY2IiLCJpYXQiOjE3MjU5NjI3ODksImV4cCI6MTcyODU1NDc4OSwidHlwZSI6InJlZnJlc2gifQ.6HT-HsvyLqw3MS5GQd9344fEU58KbPQ7uT32RA3xJzw";

function EditEmployee({
  setEditOpenPopup,
  selectedEmployee,
  handleUpdateEmployee,
}) {
  const [editEmployee, setEditEmployee] = useState({
    name: selectedEmployee.name,
    email: selectedEmployee.email,
    phoneNumber: selectedEmployee.phoneNumber,
    dateOfJoining: selectedEmployee.dateOfJoining,
  });

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `${BASE_URL}/${selectedEmployee.id}`,
        editEmployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Employee updated successfully");
        handleUpdateEmployee(res.data.data);
        setEditOpenPopup(false);
      } else {
        throw new Error("Failed to update employee");
      }
    } catch (err) {
      toast.error(
        `Error: ${err.response ? err.response.data.message : err.message}`
      );
    }
  };

  return (
    <Overlay>
      <PopupContent>
        <form onSubmit={updateEmployee}>
          <input
            type="text"
            name="name"
            value={editEmployee.name}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="email"
            name="email"
            value={editEmployee.email}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="text"
            name="phoneNumber"
            value={editEmployee.phoneNumber}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="date"
            name="dateOfJoining"
            value={
              new Date(editEmployee.dateOfJoining).toISOString().split("T")[0]
            } // Ensuring the date is in proper format
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                [e.target.name]: e.target.value,
              })
            }
          />
          <div className="mt-2">
            <button className="bg-yellow-300 rounded-md p-2" type="submit">
              Update
            </button>
            <button
              className="bg-red-400 rounded-md p-2 ml-3"
              type="button"
              onClick={() => setEditOpenPopup(false)}
            >
              Close
            </button>
          </div>
        </form>
      </PopupContent>
    </Overlay>
  );
}

export default EditEmployee;
