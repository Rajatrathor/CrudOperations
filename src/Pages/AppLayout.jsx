import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import { createContext, useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main``;
const AppLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <StyledAppLayout>
      {openSidebar && <Sidebar />}
      <Header setOpenSidebar={setOpenSidebar} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
