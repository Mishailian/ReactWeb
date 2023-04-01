let initalState = {
  'SendMesseg': [
    { 'mes': 'xxx.com' },
  ],
};

export const SendMessegReduser = (state = initalState, action) => {
  switch (action.type) {
    case 'Send-Messeg':

      let newState = { ...initalState }
      newState.SendMesseg = { ...newState.SendMesseg }
      newState.SendMesseg.push(action.mes);
      return newState;

  }
  return initalState;

};
