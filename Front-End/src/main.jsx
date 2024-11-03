import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="299868435799-b9qvbefu5fgn6330vst53snkk1p90jfk.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>

        <Toaster />
      </Provider>
    </PersistGate>
  </StrictMode>
);
