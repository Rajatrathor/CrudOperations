import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-hot-toast";
const StyledSignIn = styled.div`
  background: linear-gradient(71.17deg, #feaf00 19.35%, #f8d442 90.12%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  background: #ffffff;
  width: 30rem;
  height: 34rem;
  border-radius: 1.25rem;
`;

const Line = styled.div`
  width: 35px;
  height: 0px;
  border: 4px solid #f8d442;
  transform: rotate(-90deg);
`;
const Crud = styled.div`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
`;
const H1 = styled.h1`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 600;
  line-height: 26.82px;
`;
const P = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #6c6c6c;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #6c6c6c;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 415px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding-left: 10px;
`;
const Button = styled.button`
  width: 415px;
  height: 44px;
  border-radius: 4px;
  background: #feaf00;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  color: #ffffff;
  text-align: center;
  margin-top: 30px;
`;
const Forgot = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #6c6c6c;
`;
const Reset = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 00;
  line-height: 17.07px;
  color: #f8d442;
  text-decoration: underline;
`;
const BASE_URL = "https://crud-backend-m.vercel.app/v1/admin/auth";
const SignIn = () => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/login`, info);
      if (res.status === 200) {
        console.log(res.data.tokens);
        toast.success("Logged In successfully");
        localStorage.setItem("token", res.data.tokens);
        navigate("/applayout");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <StyledSignIn>
      <Box>
        <div className="flex mt-8 ml-[50px]">
          <Line className="mt-5"></Line>
          <Crud className="mt-1">CRUD OPERATIONS</Crud>
        </div>

        <div className="text-center mt-[40px]">
          <H1>SIGN IN</H1>
          <P className="mt-2">Enter your credentials to access your account</P>
        </div>
        <Form className="mt-[40px] ml-5" onSubmit={handleSubmit}>
          <Label htmlFor="">Email</Label>
          <Input
            className="focus:outline-none"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={info.email}
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
          />
          <Label className="mt-5" htmlFor="">
            Password
          </Label>
          <Input
            className="focus:outline-none"
            type="text"
            placeholder="Enter your password"
            name="password"
            value={info.password}
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
          />

          <Button type="submit">SIGN IN</Button>
        </Form>
        <div className="flex gap-2 mt-5 ml-[100px]">
          <Forgot>Forgot your Password?</Forgot>
          <Reset>Reset Password</Reset>
        </div>
        <div className="text-center text-yellow-600">
          <Link to="/register">Don't have an account? Register</Link>
        </div>
      </Box>
    </StyledSignIn>
  );
};

export default SignIn;
