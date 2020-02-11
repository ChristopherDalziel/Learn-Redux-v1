// When we dispatch this, it's going to go into the counter reducer and increment the state +1

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const signIn = () => {
  return {
    type: "SIGN_IN"
  };
};
