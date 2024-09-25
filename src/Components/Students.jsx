import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import axios from "axios";
import toast from "react-hot-toast";
import { QueryContext } from "../App";
const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  height: 100vh; /* Make sure the container takes the full viewport height */
  overflow-x: auto; /* Allow horizontal scrolling if necessary */
`;

const P = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.82px;
`;

const Button = styled.button`
  width: 199px;
  height: 44px;
  border-radius: 4px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: white;
  background-color: #feaf00;
`;

const TrHeadingTable = styled.tr`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.63px;
  color: #acacac
  text-align: center;
`;

const Td = styled.td`
  padding: 12px 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse; /* Merge borders to create a clean look */
  margin: 20px 0;
`;
const BASE_URL = "https://crud-backend-m.vercel.app/v1/employees";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmRhYzA0NmU3YTMwZTk1MzZjMzYzY2IiLCJpYXQiOjE3MjU5NjI3ODksImV4cCI6MTcyODU1NDc4OSwidHlwZSI6InJlZnJlc2gifQ.6HT-HsvyLqw3MS5GQd9344fEU58KbPQ7uT32RA3xJzw";

const Students = () => {
  const { query } = useContext(QueryContext);

  const [openPopup, setOpenPopup] = useState(false);
  const [editOpenPopup, setEditOpenPopup] = useState(false);
  const [tableOpen, setTableOpen] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  // GET EMPLOYEE
  async function getEmployees() {
    const res = await axios.get(`${BASE_URL}/getEmployees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      setEmployeeData(res.data.data.results);
      setFilteredData(res.data.data.results);
    }
  }
  useEffect(() => {
    if (query) {
      setFilteredData(
        employeeData.filter((employee) => employee.name.includes(query))
      );
    } else {
      setFilteredData(employeeData);
    }
  }, [query, employeeData]);

  useEffect(() => {
    getEmployees();
  }, []);

  // DELETE EMPLOYEE
  const deleteEmployee = async (id) => {
    const res = await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      setEmployeeData(employeeData.filter((employee) => id !== employee.id));
      toast.success("employee deleted successfully");
    }
  };

  // OPEN EDIT EMPLOYEE
  const openEdit = (employee) => {
    setSelectedEmployee(employee);
    setEditOpenPopup((open) => !open);
  };
  const handleUpdateEmployee = (updatedEmployee) =>
    setEmployeeData((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );

  const addNewEmployee = (newEmployee) => {
    setEmployeeData((prevData) => [...prevData, newEmployee]);
  };

  return (
    <Wrapper>
      <div className="flex justify-between p-3 border-b-2">
        <P>Students List</P>
        <div className="flex gap-2">
          <svg
            onClick={() => setTableOpen((prev) => !prev)}
            className="mt-3"
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_21_315)">
              <path
                d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z"
                fill="#FEAF00"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_315">
                <rect width="14" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Link>
            <Button onClick={() => setOpenPopup(true)}>ADD NEW STUDENT</Button>
          </Link>
        </div>
      </div>

      {tableOpen && (
        <Table>
          <thead>
            <TrHeadingTable>
              <td></td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Enroll Number</td>
              <td>Date of Admission</td>
              <td></td>
              <td></td>
            </TrHeadingTable>
          </thead>
          <tbody>
            {filteredData.map((employee) => (
              <Tr key={employee.id}>
                <Td>
                  <img
                    src="/profile.jfif"
                    alt=""
                    className="w-[65px] h-[55px] rounded-md"
                  />
                </Td>
                <Td>{employee.name}</Td>
                <Td>{employee.email}</Td>
                <Td>{employee.phoneNumber}</Td>
                <Td>8127370309494894</Td>
                <Td>{new Date(employee.dateOfJoining).toLocaleDateString()}</Td>
                <Td>
                  <img
                    onClick={() => openEdit(employee)}
                    src="/edit.png"
                    alt="edit"
                  />
                </Td>
                <Td>
                  <img
                    onClick={() => deleteEmployee(employee.id)}
                    src="/trash.png"
                    alt="delete"
                  />
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      )}

      {openPopup && (
        <AddEmployee
          setOpenPopup={setOpenPopup}
          addNewEmployee={addNewEmployee}
          query={query}
        />
      )}
      {editOpenPopup && (
        <EditEmployee
          setOpenPopup={setEditOpenPopup}
          selectedEmployee={selectedEmployee}
          setEditOpenPopup={setEditOpenPopup}
          getEmployees={getEmployees}
          handleUpdateEmployee={handleUpdateEmployee}
        />
      )}
    </Wrapper>
  );
};

export default Students;
