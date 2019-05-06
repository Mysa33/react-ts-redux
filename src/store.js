import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}
export default configureStore;