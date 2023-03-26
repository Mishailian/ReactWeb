import React from "react";

let initalState = {
  'ListOfDialogs': [
    { 'user_name': 'Misha' },
    { 'user_name': 'Misha' },
    { 'user_name': 'Misha' },
    { 'user_name': 'Misha' },
  ],
}
export const ListOfDialogsReduser = (state = initalState, action) => {

  if (action.type === 'ADD-USER') {
    state.ListOfDialogs.push(action.user_name);
  }
  return state;
};
