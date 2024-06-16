import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Rdparty = React.lazy(() => import("pages/Rdparty"));
const ProjectRoutes = () => {
  return (

    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Rdparty />} />
        </Routes>
      </Router>
    </React.Suspense>
  ); 
};
export default ProjectRoutes;
