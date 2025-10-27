import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

// Clerk expects a publishable key (or frontendApi). Use the Vite env var.
// Set VITE_CLERK_PUBLISHABLE_KEY in your .env (or use VITE_CLERK_FRONTEND_API as needed).
const clerkPublishableKey =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
  import.meta.env.VITE_CLERK_FRONTEND_API ||
  "";

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ClerkProvider>
);
