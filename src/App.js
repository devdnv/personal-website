import { Route, Routes } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import Header from "./components/Header";
import { useRef } from "react";
import Home from "./pages/Home";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import CommunityExperience from "./pages/CommunityExperience";

export default function App() {
  const viewRouting = useRef([
    { path: "/", renderView: <Home /> },
    { path: "/work-experience", renderView: <WorkExperience /> },
    { path: "/skills", renderView: <Skills /> },
    { path: "/community-experience", renderView: <CommunityExperience /> },
  ]);

  return (
    <div className="app">
      <Header />
      <Routes>
        {viewRouting.current?.map((viewRoute, viewRouteIndex) => (
          <Route path={viewRoute?.path} 
            element={viewRoute?.renderView} 
            key={viewRouteIndex} 
          />
        ))}
      </Routes>
      <Footer />
    </div>
    )
}

