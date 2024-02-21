const initialeState = [];

export const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload.name,
          email: action.payload.email,
        },
      ];
    case "Update":
      const user = state.find((u) => u.id === action.payload.id);
      if (user) {
        user.name = action.payload.name;
        user.email = action.payload.email;
      }
      return state;
    case "Delete":
      return state.filter((u) => u.id !== action.payload);
    default:
      return state;
  }
};
