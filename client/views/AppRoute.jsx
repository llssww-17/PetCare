import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PetList from "./pages/PetList.jsx";
import Register from "./pages/Register.jsx";
import PetRegister from "./pages/PetRegister.jsx";
import Video from "./pages/Video.jsx";
import styled from "styled-components";
import PetDetail from "./pages/PetDetail.jsx";
import PetUpdate from "./pages/PetUpdate.jsx";

export default function Main() {
  return (
    <Padding>
        <Routes>
          <Route path="/" element={<PetList />}></Route>
          <Route path="/pages/petregister" element={<PetRegister />}></Route>
          <Route path="/pages/register" element={<Register />}></Route>
          <Route path="/pages/video" element={<Video />}></Route>
          <Route path="/pages/petdetail" element={<PetDetail />}></Route>
          <Route path="/pages/petupdate" element={<PetUpdate />}></Route>
        </Routes>
    </Padding>
  );
}

const Padding = styled.div`
  padding: 2rem;
`