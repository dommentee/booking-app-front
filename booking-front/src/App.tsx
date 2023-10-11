import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//components
import Home from "./pages/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

//style
import "./scss/app.scss";
import BookingRules from "./pages/BookingRules";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/housekeeping" element={<BookingRules />} />
      </Routes>

      {/* <div className='closing-banner'> //needs to be a component
        <h4>
          Thankyou for being
          <br/>
          Slayed By Kita
        </h4>
        <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book Boston</a>
        <a href='https://www.styleseat.com/m/v/slayitkita?proId=1931865'  target='_blank' className='book-now'>Book Atlanta</a>

      </div> */}
      <Footer />
    </div>
  );
};

export default App;
