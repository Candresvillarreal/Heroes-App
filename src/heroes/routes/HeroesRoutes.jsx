import React from "react";
import { Navbar } from "../../ui";
import { MarvelPage, DcPage, Hero, Search } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const HeroesRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="hero" element={<Hero />} />
          <Route path="search" element={<Search />} />
          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </div>
  );
};
