import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";

export const RouterLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      {/* <Suspense fallback={<h1>Loading ...</h1>} /> */}
    </>
  );
};
