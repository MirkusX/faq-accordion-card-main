export const initialState = {
  collapseOne: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "collapseOne":
      return {
        ...state,
        collapseOne: (state.collapseOne = !state.collapseOne),
      };
  }
};
