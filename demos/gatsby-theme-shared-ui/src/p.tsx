import styled from "@emotion/styled";

const P = styled.p<{ fontWeight?: string; position?: string }>`
  font-weight: ${props => props.fontWeight};
  position: ${props => props.position};
`;

export default P;
