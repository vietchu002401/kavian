import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import AuthenticationChecking from "./components/auth/AuthenticationChecking";
import NotFound from "./pages/NotFound";
import PrivatePageExample from "./pages/private/PrivatePageExample";
import PrivatePage2 from "./pages/private/PrivatePage2";
import React from "react";

const App =()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin"/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<AuthenticationChecking/>}>
          <Route path="" element={<PrivatePageExample/>}/>
          <Route path="desk" element={<PrivatePage2/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
