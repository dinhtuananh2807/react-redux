import React from "react";
import { DatePicker } from "antd";

//react router dom
import { Routes, Route } from "react-router-dom";
import UserTemplate from "./template/User/UserTemplate";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import AdminTemplate from "./template/Admin/AdminTemplate";
import ListPhimAdmin from "./page/ListPhimAdmin/ListPhimAdmin";
import ThemPhimAdmin from "./page/ThemPhimAdmin/ThemPhimAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />}></Route>
         
        </Route>

        <Route path="sign-in" element={<Login/>}/>
        
        {/* Admin Template  */}
        <Route path="/admin" element={<AdminTemplate/>}>
          <Route path="list-phim" element={<ListPhimAdmin/>} />
          <Route path="them-phim" element={<ThemPhimAdmin/>} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
