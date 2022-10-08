import React from "react";
import { auth } from "./firebase/firebase";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import IMDbSignin from "./pages/IMDbSignin";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import SingleMovie from "./pages/SingleMovie";
import Upcoming from "./pages/Upcoming";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signIn"
          element={
            <HomeLayout>
              <SignIn />
            </HomeLayout>
          }
        />
        <Route
          path="/upcoming"
          element={
            <HomeLayout>
              <Upcoming />
            </HomeLayout>
          }
        />
        <Route path="/singlemovie/:id" element={<SingleMovie />} />
        <Route
          path="/watchlist"
          element={
            <HomeLayout>
              <WatchList />
            </HomeLayout>
          }
        />
        <Route path="/ImdbSignin" element={<IMDbSignin />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
