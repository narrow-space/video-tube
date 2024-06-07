import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import app from "./App.css";
import {
  Feed,
  SearchFeed,
  ChannelDetails,
  VedioDetails,
  Navbar,
} from "./Components";
import { useEffect, useState } from "react";

function App() {

  
  return (
    <Box
      className="app"
      sx={{
        background: "#000",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VedioDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
     
    </Box>
  );
}

export default App;
