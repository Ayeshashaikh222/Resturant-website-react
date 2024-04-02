import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import PinCodeCheckerHeader from "./Layout/PinCodeCheckerHeader";
import SubFooter from "./Layout/SubFooter";
import Home from "./Pages/Home";
import MostLovedDetailPage from "./components/MostLovedDetailPage";
import Notification from "./components/Notification";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <PinCodeCheckerHeader />
    //   <Notification />
    //   <Header />
    //   <Home />
    // </>
    <>
      <PinCodeCheckerHeader />
      <Notification />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
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
