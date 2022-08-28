import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Category } from "./pages/Category";
import { ItemPage } from "./pages/ItemPage";
import { Main } from "./pages/Main";

export const useRoutes = () => {
  return (
    <Routes path>
      <Route path="/" element={<Main />} exact />
      <Route path="/category" element={<Category />} exact />
      <Route path="/category/:id" element={<ItemPage />} exact />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
