import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleRecipePage from "./pages/SingleRecipePage";
import AllRecipesPage from "./pages/AllRecipesPage";
import Toolbar from "./components/Toolbar";
import SearchPage from "./pages/SearchPage";
import SearchTagsPage from "./pages/SearchTagsPage";

function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Toolbar />
          <Routes>
            <Route path="/" element={<AllRecipesPage />} />
            <Route path="/page/:page" element={<AllRecipesPage />} />
            <Route path="/recipe/:id" element={<SingleRecipePage />} />
            <Route path="/search/:word" element={<SearchPage />} />
            <Route path="/tag/:tag" element={<SearchTagsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
