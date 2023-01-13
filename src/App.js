import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Inventory from './Components/Inventory'
import Add from "./Components/Add";
import Update from "./Components/Update";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:handle' element={<Update />} />

      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </Router>
  );
}

export default App;
