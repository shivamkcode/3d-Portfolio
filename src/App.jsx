import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <Router>
      <main className="bg-slate-300/20 h-[100dvh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Analytics />
    </Router>
  );
};

export default App;
