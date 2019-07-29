import styled from "@emotion/styled";

const Title = styled.h1<{ as?: string; margin?: string }>`
  margin-bottom: 2.5rem;
  margin: ${props => props.margin};
  font-size: 3rem;
`;

export default Title;
