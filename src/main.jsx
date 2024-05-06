import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProbider from "./AuthProbider/AuthProbider";
// tanstack
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProbider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-xl	mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProbider>
  </React.StrictMode>
);
