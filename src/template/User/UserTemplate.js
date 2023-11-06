import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import React from "react";
import LoadingAni from "../../component/Loading/Loading";


const UserTemplate = () => {
  return (
    <>
   <LoadingAni/>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default UserTemplate;
