export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  toggleTheme: JSON.parse(localStorage.getItem("theme")) || false,
  postLike: 0,
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
    // case "LIKE_POST":
    //   return {
    //     ...state,
    //     postLike: state.postLike + 1,
    //   };
    default:
      return state;
  }
};

export default reducer;
