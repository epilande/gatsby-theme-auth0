import styled from "@emotion/styled";

const Title = styled.h1<{ as?: string; margin?: string; fontSize?: string }>`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize || "3rem"};
`;

export default Title;
