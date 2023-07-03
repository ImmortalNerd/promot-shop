
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare,faPhone, faEnvelope, faMagnifyingGlass, faHome, faRightToBracket, faShoppingCart, faLocationDot , faEnvelopeCircleCheck , faRss, faCartPlus, faTruck, faHeadset, faGem, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Layout from './Pages/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Portfolio from './Pages/Portfolio'
import ContactsUs from './Pages/ContactsUs';
import Login from './components/Login';
import HotSale from './Pages/HotSale';
library.add(fab, faCheckSquare, faPhone, faEnvelope, faMagnifyingGlass, faHome, faRightToBracket, faShoppingCart, faLocationDot, faEnvelopeCircleCheck, faRss,faCartPlus, faTruck, faHeadset, faGem, faArrowUp);

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route to='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='shop' element={<Shop />} />
        <Route path='hotsale' element={<HotSale />} />
        <Route path='contactus' element={<ContactsUs />} />
        <Route path='portfolio' element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
        <Route path='login' element={<ProtectedRoute><Login /></ProtectedRoute>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );

}

export default App;
