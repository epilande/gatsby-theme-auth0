import styled from "@emotion/styled";

const Button = styled.button`
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1px;
  background-image: linear-gradient(
    to right,
    #7060ff,
    #663399,
    #e8a148,
    #eb5424
  );
  background-size: 300% 100%;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 4rem 0 #663399;

  &:hover {
    background-position: 100% 0;
    box-shadow: 0 0 4rem 0 rgb(235, 84, 36, 0.7);
  }
`;

export default Button;
