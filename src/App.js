import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact index element={<HomePage />} />
        <Route path="newgame" element={<>Hlelosd</>} />
      </Route>
    </Routes>
  );
}

export default App;
