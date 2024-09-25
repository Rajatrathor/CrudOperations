import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const BASE_URL = "https://crud-backend-m.vercel.app/v1/admin/auth";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/register`, formData);
      if (res.status === 201) {
        toast.success("Registered successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="enter password"
          name="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <button type="submit">Register</button>
        <div>
          <Link to="/">Already have account? LogIn</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
