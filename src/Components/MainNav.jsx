import styled from "styled-components";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  HiDocumentMinus,
  HiMiniAdjustmentsHorizontal,
  HiMiniArrowRightEndOnRectangle,
  HiMiniDevicePhoneMobile,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineHome,
} from "react-icons/hi2";
import axios from "axios";

const StyledNavLink = styled(NavLink)`
  width: 143px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  border-radius: 5px;
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: #feaf00;
  }
`;
const Span = styled.span`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
`;
const BASE_URL = "https://crud-backend-m.vercel.app/v1/admin/auth";
const MainNav = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await axios.post(`${BASE_URL}/logout`);
    if (res.status === 200) {
      console.log("logged out successfully");
      toast.success("logged out successfully");
      navigate("/");
    }
  };
  return (
    <ul className="flex flex-col gap-2 ml-7 mt-5">
      <li>
        <StyledNavLink to="home">
          <HiOutlineHome /> <Span>Home</Span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="course">
          <HiMiniDevicePhoneMobile />
          <Span>Course</Span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="students">
          <HiOutlineAcademicCap /> <Span>Students</Span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="payment">
          <HiOutlineCurrencyDollar /> <Span>Payment</Span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="report">
          <HiDocumentMinus /> <Span>Report</Span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="settings">
          <HiMiniAdjustmentsHorizontal /> <Span>Settings</Span>
        </StyledNavLink>
      </li>
      <li className="mt-[40px]">
        <StyledNavLink onClick={handleLogout}>
          <HiMiniArrowRightEndOnRectangle /> <Span>Logout</Span>
        </StyledNavLink>
      </li>
    </ul>
  );
};

export default MainNav;
