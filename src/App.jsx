import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./components/Nav";
import AtomFamily from "./pages/AtomFamily";
import EasyBits from "./pages/EasyBits";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/easy-bits" element={<EasyBits />} />
          <Route path="/atom-family" element={<AtomFamily />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
