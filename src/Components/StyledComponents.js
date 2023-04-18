import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const ArrowDown = styled(IoIosArrowDown)`
  color: orange;
`;

export const StyledSection = styled.section`
  background-color: #8f66ea;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: left;
`;

export const StyledDiv = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  padding-top: 3em;
  gap: 10em;
  overflow: hidden;
`;

export const CollapsibleDiv = styled.div`
  border-bottom: 1px solid black;
`;

export const ImageDiv = styled.div`
  position: relative;
  right: 8%;
`;

export const StyledButton = styled.button`
  border: none;
  padding: 1em 0;
  background-color: white;
`;

export const StyledP = styled.p`
  color: gray;
  font-size: 0.7rem;
`;
