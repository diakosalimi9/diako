// import SliderTechno from "./component/ui/organism/slide-techno/SliderTechno";
import Home from "./pages/Home";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/parsial/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App;