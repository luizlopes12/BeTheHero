const INITIAL_STATE = false;
const caseData = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_CASE_DATA") {
    return action.data;
  }
  return state;
};

export default caseData;
