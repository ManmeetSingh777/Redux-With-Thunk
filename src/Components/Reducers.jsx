const initialState = {
  user: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case "success":
      return { ...state, user: payload, error: "" };
    case "error":
      return { ...state, user: [], error: "error" };
    default:
      return state;
  }
};

export default reducer;
