import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'rgba(17, 25, 40, 0.95)',
            border: '1px solid rgba(112, 66, 248, 0.3)',
            color: '#F8FAFC',
          },
        }}
      />
    </div>
  );
}

export default App;