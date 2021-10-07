import React, { useState } from 'react';
import { useAppDispatch } from './app/hooks';
import Login from './components/login/login';
import { loginSuccess } from './features/User/userSlice';

function App() {
  const dispatch = useAppDispatch();
  // const email = useAppSelector( (state) => {state.userReducer.email })

  function handleClick() {
    dispatch(loginSuccess('kanyecope@gmail.com'));
  }
  return <Login />;
}

export default App;
