import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import PinCodeCheckerHeader from "./Layout/PinCodeCheckerHeader";
import SubFooter from "./Layout/SubFooter";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Gifts from "./Pages/Gifts";
import Home from "./Pages/Home";
import Locations from "./Pages/Locations";
import Menu from "./Pages/Menu";
import MostLovedDetailPage from "./components/MostLovedDetailPage";
import Notification from "./components/Notification";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <PinCodeCheckerHeader />
      <Notification />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gift" element={<Gifts />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/location" element={<Locations />} />

        <Route
          path="/mostLoved-detailpage/:itemId"
          element={<MostLovedDetailPage />}
        />
      </Routes>
      <div className="bg-purple-100">
        <Footer />
      </div>

      <SubFooter />
    </>
  );
}

export default App;
