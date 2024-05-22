import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./components/Nav";
import AtomOrSelectorFamily from "./pages/AtomFamily";
import EasyBits from "./pages/EasyBits";

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
          <Route path="/atom-family" element={<AtomOrSelectorFamily />} />
          {/* </Suspense> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
