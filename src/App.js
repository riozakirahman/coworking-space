import About from "./component/About";
import Navbar from "../src/component/Navbar";
import Footer from "../src/component/Footer";
import "../src/css/normalize.css";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
