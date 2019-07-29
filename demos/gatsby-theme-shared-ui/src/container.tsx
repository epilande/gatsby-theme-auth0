import styled from "@emotion/styled";

const Container = styled.div<{ textAlign: string }>`
  margin: 0 auto;
  max-width: 73.125rem;
  padding: 0 1.25rem;
  text-align: ${props => props.textAlign};
`;

export default Container;
