export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  toggleTheme: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "DARK_THEME":
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    // case "LIGHT_THEME":
    //   return {
    //     ...state,
    //     toggleTheme: true,
    //   };
    default:
      return state;
  }
};

export default reducer;
