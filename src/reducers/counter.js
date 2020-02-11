const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    // Don't forget the default options when using the switch/case syntax
    default:
      return state;
  }
};

export default counterReducer;
