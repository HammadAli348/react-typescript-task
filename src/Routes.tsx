import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "./screens";
import CreateTask from "./screens/CreateTask";

const MainRoutes = () => {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path={`/`} element={<ListPage />} />
        <Route path={`/create-task`} element={<CreateTask />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
