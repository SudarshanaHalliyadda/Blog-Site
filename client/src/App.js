import TopBar from "./components/topbar/TopBar";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
    
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/posts" element={<HomePage />}/>
        <Route path="/register" element={user ? <HomePage /> :<Register />}/>
        <Route path="/login" element={user ? <HomePage /> :<Login />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={ <Write />}/>
        <Route path="/settings" element={<Login />}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;