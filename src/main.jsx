import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import {  HelmetProvider } from "react-helmet-async";
import AuthProbider from "./AuthProbider/AuthProbider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProbider>
   <HelmetProvider>
      <div className="max-w-screen-xl	mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
   </AuthProbider>
  </React.StrictMode>
);
