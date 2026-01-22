import "./App.css";
import Navbar from "./common/Header/Navbar";
import Footer from "./common/Footer/Footer";
import Routing from "./routing/routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <HomePage/> */}
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
