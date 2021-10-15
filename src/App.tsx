import React, { useState } from 'react';
import { useAppDispatch } from './app/hooks';
import SideMenu from './components/layout/NavMenu';
import Login from './components/login/login';
import { loginSuccess } from './features/User/userSlice';
import Dashboard from './components/layout/Dashboard';
import NavTabs from './components/tabView/NavTabs';
import SignIn from './components/login/SignIn';
function App() {
  const dispatch = useAppDispatch();
  // const email = useAppSelector( (state) => {state.userReducer.email })

  function handleClick() {
    dispatch(loginSuccess('kanyecope@gmail.com'));
  }
  // return <Login />;
  return <SideMenu />;
  // return <SignIn />;
}

export default App;
