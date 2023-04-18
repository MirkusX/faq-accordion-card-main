import { useReducer } from "react";
import {
  CollapsibleDiv,
  StyledDiv,
  StyledSection,
  ImageDiv,
  StyledButton,
  ArrowDown,
} from "../Components/StyledComponents";
import woman from "../Images/woman.svg";
import { initialState, reducer } from "../Components/useReducer";
import { InformationArray } from "./PageFiles/InformationArray";

export const Faq = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.collapseOne);
  const expand = (props) => {
    dispatch(props);
  };
  return (
    <StyledSection>
      <StyledDiv>
        <ImageDiv>
          <img src={woman} />
        </ImageDiv>
        <div>
          <h1>FAQ</h1>

          {InformationArray.map((item, index) => {
            return (
              <>
                <StyledButton onClick={() => expand({ type: "collapseOne" })}>
                  {item.title} <ArrowDown />
                </StyledButton>
                <CollapsibleDiv>
                  {state.collapseOne && <p>{item.expanded}</p>}
                </CollapsibleDiv>
              </>
            );
          })}
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
