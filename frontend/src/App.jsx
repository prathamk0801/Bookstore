
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import ContactPage from './contact/Contacts'
import AboutPage from './about/Abouts'
import { Toaster } from "react-hot-toast";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/course"
          element={
            authUser ? (
              <Courses />
            ) : (
              <Navigate to="/signup" state={{ from: "/course" }} />
            )
          }
        />

        <Route path="/signup" element={<Signup />} />
         <Route path='/contact' element={<ContactPage/>} />
//           <Route path='/about' element={<AboutPage/>} />
      </Routes>
       <Toaster />
      
    </>
  );
}

export default App;

