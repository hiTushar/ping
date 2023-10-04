import Email from "./components/Email";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import windowImg from "./assets/illustration-dashboard.png";

function App() {
  return (
    <div className="app">
      <Header />
      <Email />
      <img src={windowImg} alt={"dummywindow"} className="pic" />
      <Footer />
    </div>
  );
}

export default App;
