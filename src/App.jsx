import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import AppLayout from "./Pages/AppLayout";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Payment from "./Components/Payment";
import GlobalStyles from "./Styles/GlobalStyles";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
export const QueryContext = createContext();
function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <QueryContext.Provider value={{ query, setQuery }}>
        <Toaster position="top-center" reverseOrder={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/applayout" element={<AppLayout />}>
              <Route
                index
                element={<Navigate replace to="/applayout/home" />}
              />
              <Route path="home" element={<Home />} />
              <Route path="students" element={<Students />} />
              <Route path="payment" element={<Payment />} />
            </Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryContext.Provider>
    </div>
  );
}

export default App;
