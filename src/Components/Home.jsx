import styled from "styled-components";

const array = [
  {
    name: "students",
    image: "/student.png",
    text: "243",
    backgroundColor: "#F0F9FF",
  },
  {
    name: "Course",
    image: "/course.png",
    text: "13",
    backgroundColor: "#FEF6FB",
  },
  {
    name: "Payments",
    image: "/payment.png",
    text: "INR 556,000",
    backgroundColor: "#FEFBEC",
  },
  {
    name: "Users",
    image: "/user.png",
    text: "3",
    backgroundColor: "#FEFBEC",
  },
];

const Li = styled.li`
  width: 255px;
  height: 157px;
  &:hover {
    background: linear-gradient(110.42deg, #feaf00 18.27%, #f8d442 91.84%);
  }
  border-radius: 10px;
`;
const H4 = styled.h4`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #6c6c6c;
`;
const P = styled.p`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
  line-height: 36.57px;
`;

const Home = () => {
  return (
    <>
      <ul className="flex flex-wrap justify-evenly gap-3 ml-5 mt-5">
        {array.map((item) => (
          <Li key={item.name} style={{ backgroundColor: item.backgroundColor }}>
            <div className="ml-3 relative">
              <img src={item.image} className="mt-5" />
              <H4 className="mt-2">{item.name}</H4>
              <P className="absolute top-20 right-3">{item.text}</P>
            </div>
          </Li>
        ))}
      </ul>
    </>
  );
};

export default Home;
