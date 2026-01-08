import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MediaDetailPage from "./pages/MediaDetailPage";
import VocabularyDetailPage from "./pages/VocabularyDetailPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/media/:mediaId" element={<MediaDetailPage />} />
      <Route path="/media/:mediaId/word/:wordId" element={<VocabularyDetailPage />} />
    </Routes>
  );
};

export default App;
