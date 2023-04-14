import { useReducer } from "react";
import {
  CollapsibleDiv,
  StyledDiv,
  StyledSection,
} from "../Components/StyledComponents";
import woman from "../Images/woman.svg";
import { initialState, reducer } from "../Components/useReducer";

export const Faq = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.collapseOne);
  const expand = () => {
    dispatch({ type: "collapseOne" });
  };
  return (
    <StyledSection>
      <StyledDiv>
        <div>
          <img src={woman} />
        </div>
        <div>
          <h1>FAQ</h1>
          <button onClick={() => expand()}>expand</button>
          {state.collapseOne && (
            <CollapsibleDiv>
              <p>bound</p>
            </CollapsibleDiv>
          )}
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
