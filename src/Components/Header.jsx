import styled from "styled-components";
import { HiMiniPlay, HiMagnifyingGlass, HiBell } from "react-icons/hi2";
import { useContext } from "react";
import { QueryContext } from "../App";

const StyledHeader = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
const Input = styled.input`
  width: 212px;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
  padding-left: 5px;
`;
const Header = ({ setOpenSidebar }) => {
  const { query, setQuery } = useContext(QueryContext);
  return (
    <StyledHeader>
      <div>
        <span
          onClick={() => {
            setOpenSidebar((prev) => !prev);
          }}
        >
          <HiMiniPlay />
        </span>
      </div>
      <div className="flex gap-7">
        <div className="flex relative">
          <Input
            type="text"
            placeholder="Search.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <HiMagnifyingGlass className="absolute top-2 right-3" />
        </div>
        <div className="mt-2">
          <HiBell />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
