import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute";
import MyOffers from "./pages/MyOffers";
import AddOffer from "./components/AddOffer.jsx";
import AllOffers from "./pages/AllOffers.jsx";
import {useEffect} from "react";
import "./App.css"

function Logout() {
  localStorage.clear()
  return <Login />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
    useEffect( () => {
        document.body.classList.add("body-container")

        return () => {
            document.body.classList.remove("body-container")
            }
        }, [])

  return (
      <div className="body-container">
         <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                  path='/register'
                  element= {<RegisterAndLogout/>}
              />
              <Route
                  path='/login'
                  element={<Login/>}
              />
                <Route
              path='/logout'
              element={<Logout />}
                />
                <Route
                  path='*'
                  element={<NotFound/>}
                />
                <Route
                path='/my-offers'
                element={
                    <MyOffers />
                }
                />
                <Route
                    path='/add-offer'
                    element={
                        <AddOffer />
                }
                />
                <Route
                    path='/offers'
                    element={
                        <AllOffers />
                    }
                />
            </Routes>
          </BrowserRouter>
      </div>

  )
}

export default App
