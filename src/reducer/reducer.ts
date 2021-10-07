import { counterReducer } from './../features/Counter/counterSlice';
import userReducer from './../features/User/userSlice';
const reducer = {
  userReducer,
  counterReducer,
};
export default reducer;
