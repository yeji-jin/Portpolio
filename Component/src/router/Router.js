import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentDetail from "../component/ComponentDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<GalleryPage />} /> */}
        <Route path="/ComponentDetail" element={<ComponentDetail />} />
        {/* <Route path=":cardId" element={<DetailCard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
