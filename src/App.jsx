import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./components/Nav";
import AtomFamily from "./pages/AtomFamily";
import EasyBits from "./pages/EasyBits";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Suspense fallback={"loading..."}> */}
          <Route path="/easy-bits" element={<EasyBits />} />
          {/* </Suspense> */}
          {/* <Suspense fallback={"loading..."}> */}
          <Route path="/atom-family" element={<AtomFamily />} />
          {/* </Suspense> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
