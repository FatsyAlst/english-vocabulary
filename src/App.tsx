import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MediaDetailPage from "./pages/MediaDetailPage";
import VocabularyDetailPage from "./pages/VocabularyDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ExercisesPage from "./pages/ExercisesPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/media/:mediaId" element={<MediaDetailPage />} />
      <Route path="/media/:mediaId/word/:wordId" element={<VocabularyDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/exercises" element={<ExercisesPage />} />
    </Routes>
  );
};

export default App;
