import styled from "styled-components";
const Line = styled.div`
  width: 23px;
  height: 0px;
  border: 4px solid #f8d442;
  transform: rotate(-90deg);
`;
const Crud = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.38px;
`;

const H1 = styled.h1`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.72px;
  margin-top: 17px;
`;
const P = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #feaf00;
  margin-top: 10px;
  margin-left: 30px;
`;
const Logo = () => {
  return (
    <>
      <div className="flex items-center mt-5 ml-5">
        <Line className=""></Line>
        <Crud className="">CRUD OPERATIONS</Crud>
      </div>
      <div className="mt-16 ml-16">
        <img
          className="rounded-full h-[120px] w-[120px]"
          src="/profile.jfif"
          alt="image"
        />
        <H1>Karthi Madesh</H1>
        <P>Admin</P>
      </div>
    </>
  );
};

export default Logo;
