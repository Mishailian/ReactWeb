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
<<<<<<< HEAD
      newState.SendMesseg.push(action.mes)
=======
      newState.SendMesseg.push(action.mes);
>>>>>>> 4bd95210afb22bd13fc233b64c200844dd962e35
      return newState;

  }
  return initalState;

};
