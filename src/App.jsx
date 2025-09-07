import Scns from "./comp/About/Scns/Scns";
import Conference from "./comp/Conference/Conference";
import { Header, Main, Footer,Registration,Abstract,Committee } from "./comp/index";
import PP from "./comp/Footer/pp/PP.jsx"
import TOU from "./comp/Footer/tou/TOU.jsx"
import RP from "./comp/Footer/rp/RP.jsx"
import { Routes, Route } from "react-router-dom";
import Speaker from "./comp/Speaker/Speaker";
import Contact from "./comp/Contact/Contact";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/abstract" element={<Abstract/>}/>
        <Route path="/scns" element={<Scns/>}/>
        <Route path="/committee" element={<Committee/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/conference" element={<Conference/>}/>
         <Route path="/speaker" element={<Speaker/>}/>
                  <Route path="/terms" element={<TOU/>}/>
         <Route path="/privacy-policy" element={<PP/>}/>
         <Route path="/refund-policy" element={<RP/>}/>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
