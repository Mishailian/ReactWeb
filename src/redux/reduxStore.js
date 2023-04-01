import { combineReducers, createStore } from "redux";
import { ListOfDialogsReduser } from "./ListOfDialogs-reduser";
import { SendMessegReduser } from "./sendMesseg-reduser";

let redusers = combineReducers({
  'Dialog': ListOfDialogsReduser,
  'SendMesseg': SendMessegReduser,
});
let store = createStore(redusers);


export default store;
