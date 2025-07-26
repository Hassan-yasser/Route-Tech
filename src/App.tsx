import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./lib/routes/Routes";
import { Toaster } from "react-hot-toast";
import Navbar from "./compoents/layout/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
