let initalState = {
  'SendMesseg': [
    { 'mes': 'xxx.com' },
  ],
};

export const SendMessegReduser = (state = initalState, action) => {
  switch (action.type) {
    case 'Send-Messeg':

      let newState = { ...state }
      console.log(newState)
      newState.SendMesseg.push(action.mes)
      return newState;

  }
  return initalState;

};
