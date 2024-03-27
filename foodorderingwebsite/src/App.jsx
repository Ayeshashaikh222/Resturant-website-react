import "./App.css";
import Header from "./Layout/Header";
import PinCodeCheckerHeader from "./Layout/PinCodeCheckerHeader";
import Home from "./Pages/Home";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <PinCodeCheckerHeader />
      <Notification />
      <Header />
      <Home />
    </>
  );
}

export default App;
